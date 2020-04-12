import * as React from 'react';
import { Artwork } from './Artwork.component';
import type { Artist, ArtworkType } from './types/data.types';
import { ApolloError } from 'apollo-boost';

type PopularArtistsProps = {
  displayedArtists: Artist[];
  loading: boolean;
  error?: ApolloError;
};

export const PopularArtists: React.StatelessComponent<PopularArtistsProps> = ({
  displayedArtists,
  loading,
  error,
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Popular Artists</h2>
      {displayedArtists.map(({ id, name, bio, artworks }: Artist) => (
        <div key={id}>
          <div className="flex flex-column">
            <h3 className="b mb0">{name}</h3>
            <span>{bio}</span>
          </div>
          <div className="flex justify-around flex-wrap">
            {artworks.map((artwork: ArtworkType) => (
              <Artwork key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
