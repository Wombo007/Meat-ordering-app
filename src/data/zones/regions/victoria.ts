import { ZoneInfo } from '../zoneTypes';

const createZoneEntries = (postcodes: string[], zoneId: string, zoneName: string, depot: string) => {
  return postcodes.reduce((acc, postcode) => {
    acc[postcode] = { id: zoneId, name: zoneName, depot };
    return acc;
  }, {} as { [key: string]: ZoneInfo });
};

export const victoriaZones: { [postcode: string]: ZoneInfo } = {
  // Melbourne Metro (Zone 5)
  ...createZoneEntries(
    ['3000', '3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009', '3010', '3011', '3012', '3013', '3014', '3015', '3016', '3018', '3019', '3020', '3021', '3022', '3023', '3024', '3025', '3026', '3027', '3028', '3029', '3030', '3031', '3032', '3033', '3034', '3035', '3036', '3037', '3038', '3039', '3040', '3041', '3042', '3043', '3044', '3045', '3046', '3047', '3048', '3049', '3050', '3051', '3052', '3053', '3054', '3055', '3056', '3057', '3058', '3059', '3060', '3061', '3062', '3063', '3064', '3065', '3066', '3067', '3068', '3069', '3070', '3071', '3072', '3073', '3074', '3075', '3076', '3078', '3079', '3081', '3082', '3083', '3084', '3085', '3086', '3087', '3088', '3089', '3090', '3091', '3093', '3094', '3095', '3096', '3097', '3099', '3101', '3102', '3103', '3104', '3105', '3106', '3107', '3108', '3109', '3111', '3113', '3114', '3115', '3116', '3121', '3122', '3123', '3124', '3125', '3126', '3127', '3128', '3129', '3130', '3131', '3132', '3133', '3134', '3135', '3136', '3137', '3138', '3139', '3140', '3141', '3142', '3143', '3144', '3145', '3146', '3147', '3148', '3149', '3150', '3151', '3152', '3153', '3154', '3155', '3156', '3158', '3159', '3160', '3161', '3162', '3163', '3165', '3166', '3167', '3168', '3169', '3170', '3171', '3172', '3173', '3174', '3175', '3177', '3178', '3179', '3180', '3181', '3182', '3183', '3184', '3185', '3186', '3187', '3188', '3189', '3190', '3191', '3192', '3193', '3194', '3195', '3196', '3197', '3198', '3199', '3200', '3201', '3202', '3204', '3205', '3206', '3207', '3800', '3802', '3803', '3804', '3805', '3806', '3807', '3808', '3809', '3810', '3910', '3911', '3912', '3913', '3915', '3916', '3918', '3919', '3920', '3926', '3927', '3928', '3929', '3930', '3931', '3933', '3934', '3936', '3937', '3938', '3939', '3940', '3941', '3942', '3943', '3944', '3975', '3976', '3977', '3978', '3980'],
    '5',
    'MEL METRO',
    'Melbourne'
  ),

  // Geelong (Zone 6)
  ...createZoneEntries(
    ['3211', '3212', '3213', '3214', '3215', '3216', '3217', '3218', '3219', '3220', '3221', '3222', '3223', '3224', '3225', '3226', '3227', '3228', '3230', '3231', '3232', '3233', '3235', '3236', '3240', '3241', '3242', '3243', '3249', '3250', '3251', '3254', '3260', '3321', '3322', '3323', '3324', '3325', '3328', '3329', '3330', '3331', '3332', '3333', '3334'],
    '6',
    'GEELONG',
    'Melbourne'
  ),

  // Mornington Peninsula (Zone 7)
  ...createZoneEntries(
    ['3910', '3911', '3912', '3913', '3915', '3916', '3918', '3919', '3920', '3926', '3927', '3928', '3929', '3930', '3931', '3933', '3934', '3936', '3937', '3938', '3939', '3940', '3941', '3942', '3943', '3944'],
    '7',
    'MORNINGTON PENINSULA',
    'Melbourne'
  ),

  // Central Highlands (Zone 8)
  ...createZoneEntries(
    ['3335', '3336', '3337', '3338', '3340', '3341', '3342', '3345', '3350', '3351', '3352', '3353', '3354', '3355', '3356', '3357', '3363', '3364', '3370', '3371', '3373', '3375', '3377', '3378', '3379', '3380'],
    '8',
    'CENTRAL HIGHLANDS',
    'Melbourne'
  ),

  // Yarra Ranges (Zone 9)
  ...createZoneEntries(
    ['3115', '3116', '3137', '3138', '3139', '3140', '3154', '3155', '3156', '3158', '3159', '3160', '3766', '3767', '3775', '3777', '3781', '3782', '3783', '3785', '3786', '3787', '3788', '3789', '3791', '3792', '3793', '3795', '3796', '3797', '3799'],
    '9',
    'YARRA RANGES',
    'Melbourne'
  ),

  // Bendigo (Zone 26)
  ...createZoneEntries(
    ['3550', '3551', '3552', '3553', '3554', '3555', '3556', '3557', '3558', '3559', '3560', '3561', '3562', '3563', '3564', '3565', '3566', '3567', '3568', '3570', '3571', '3572', '3573', '3575'],
    '26',
    'BENDIGO',
    'Melbourne'
  ),

  // Gippsland (Zone 23)
  ...createZoneEntries(
    ['3820', '3821', '3822', '3823', '3824', '3825', '3831', '3832', '3833', '3835', '3840', '3841', '3842', '3844', '3847', '3850', '3851', '3852', '3854', '3856', '3857', '3858', '3859', '3860', '3862', '3869', '3870', '3871', '3873', '3874', '3875', '3878', '3880', '3882', '3885', '3886', '3887', '3888', '3889', '3890', '3891', '3892', '3893', '3895', '3896', '3898', '3900', '3902', '3903', '3904', '3909', '3921', '3922', '3923', '3925'],
    '23',
    'GIPPSLAND',
    'Melbourne'
  ),

  // Gippsland South (Zone 46)
  ...createZoneEntries(
    ['3945', '3946', '3950', '3951', '3953', '3954', '3956', '3957', '3959', '3960', '3962', '3964', '3965', '3966', '3967', '3971', '3979', '3981', '3984', '3987', '3988', '3990', '3991', '3992', '3995', '3996'],
    '46',
    'GIPPSLAND SOUTH',
    'Melbourne'
  ),

  // South West VIC (Zone 65)
  ...createZoneEntries(
    ['3237', '3238', '3239', '3241', '3242', '3243', '3249', '3250', '3251', '3254', '3260', '3264', '3265', '3266', '3267', '3268', '3269', '3270', '3271', '3272', '3273', '3274', '3275', '3276', '3277', '3278', '3279', '3280', '3281', '3282', '3283', '3284', '3285', '3286', '3287', '3289', '3292', '3293', '3294', '3300', '3301', '3302', '3303', '3304', '3305'],
    '65',
    'SOUTH WEST VIC',
    'Melbourne'
  ),

  // West VIC (Zone 64)
  ...createZoneEntries(
    ['3350', '3351', '3352', '3353', '3354', '3355', '3356', '3357', '3363', '3364', '3370', '3371', '3373', '3375', '3377', '3378', '3379', '3380', '3381', '3384', '3385', '3387', '3388', '3390', '3391', '3392', '3393', '3395', '3396', '3400', '3401', '3402', '3409', '3412', '3413', '3414', '3415', '3418', '3419', '3420', '3423', '3424', '3427', '3428', '3429', '3430', '3431', '3432', '3433', '3434', '3435', '3437', '3438', '3440', '3441', '3442', '3444', '3446', '3447', '3448', '3450', '3451', '3453', '3458', '3460', '3461', '3462', '3463', '3464', '3465', '3467', '3468', '3469', '3472', '3475', '3478'],
    '64',
    'WEST VIC',
    'Melbourne'
  )
};