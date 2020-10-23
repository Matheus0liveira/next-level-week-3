import Orphanages from '../models/Orphanage';

import imageView from './Image_view';

export default {
  render(orphanage: Orphanages) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: Number(orphanage.latitude),
      longitude: Number(orphanage.longitude),
      about: orphanage.about,
      instructions: orphanage.instructions,
      phone: orphanage.phone,
      pending: orphanage.pending,
      markerMap: orphanage.markerMap,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imageView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanages[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
