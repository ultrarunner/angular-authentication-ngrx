export interface ISource {
    url: string;
    type: SourceType;
}

export class Source implements ISource {
    url: string;
    type: SourceType;
}

enum SourceType {
    RSS = 1,
    API = 2
}

