import { SelectItem } from 'primeng/api';
import { ParamsValues } from '../enums/params.values';
import { ParamsLabels } from '../enums/params.labels';

export const simpleFilterOptions: SelectItem[] = [
  { label: ParamsLabels.added, value: ParamsValues.added },
  { label: ParamsLabels.metacritic, value: ParamsValues.metacritic },
  { label: ParamsLabels.name, value: ParamsValues.name },
  { label: ParamsLabels.released, value: ParamsValues.released },
  { label: ParamsLabels.created, value: ParamsValues.created },
  { label: ParamsLabels.updated, value: ParamsValues.updated },
  { label: ParamsLabels.rating,  value: ParamsValues.rating },
];
