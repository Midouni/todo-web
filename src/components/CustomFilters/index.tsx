import { Stack, Typography, useTheme } from "@mui/material";
import CustomFilterLink from "../CustomFilterLink";

export function CustomFilters({ onClick, filters, selected }: CustomFilterProps) {
    const theme = useTheme();
    return (
        <Stack sx={{ mt: 4, mb: -2 }} direction="row" spacing={2} alignItems={'center'}>
            <Typography color={theme.palette.link.main} sx={{ opacity: .5 }} variant={'h5'}>
                Show :
            </Typography>
            <Stack direction="row" spacing={1}>
                {
                    filters?.map(
                        (filter) => (
                            <CustomFilterLink
                                title={filter.label}
                                active={filter.label === selected.label}
                                onClick={() => {
                                    onClick(filter);
                                }}
                            />
                        )
                    )
                }
            </Stack>
        </Stack>
    )
}

interface CustomFilterProps {
    onClick: (selected: Filter) => void;
    filters: Filter[];
    selected: Filter;
}
interface Filter {
    label: string;
    value: any;
}