class Food {
  id: number;
  image: string;
  title: string;
  avaliation: string;
  description: string;
  infos: string[];

  constructor(
    id: number,
    image: string,
    title: string,
    avaliation: string,
    description: string,
    infos: string[]
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.avaliation = avaliation;
    this.description = description;
    this.infos = infos;
  }
}

export default Food;
