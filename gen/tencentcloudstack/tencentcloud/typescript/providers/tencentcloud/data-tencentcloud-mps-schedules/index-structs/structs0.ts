import * as cdktf from 'cdktf';
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subtitle - computed: true, optional: false, required: false
  private _subtitle = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleList(this, "subtitle", false);
  public get subtitle() {
    return this._subtitle;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // image_content - computed: true, optional: false, required: false
  private _imageContent = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentList(this, "image_content", false);
  public get imageContent() {
    return this._imageContent;
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // image_template - computed: true, optional: false, required: false
  private _imageTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateList(this, "image_template", false);
  public get imageTemplate() {
    return this._imageTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // raw_parameter - computed: true, optional: false, required: false
  private _rawParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterList(this, "raw_parameter", false);
  public get rawParameter() {
    return this._rawParameter;
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_on_subtitles - computed: true, optional: false, required: false
  private _addOnSubtitles = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // segment_object_name - computed: true, optional: false, required: false
  public get segmentObjectName() {
    return this.getStringAttribute('segment_object_name');
  }

  // sub_stream_object_name - computed: true, optional: false, required: false
  public get subStreamObjectName() {
    return this.getStringAttribute('sub_stream_object_name');
  }

  // watermark_set - computed: true, optional: false, required: false
  private _watermarkSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // extended_parameter - computed: true, optional: false, required: false
  public get extendedParameter() {
    return this.getStringAttribute('extended_parameter');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormat {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // initial_value - computed: true, optional: false, required: false
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // place_holder - computed: true, optional: false, required: false
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // object_number_format - computed: true, optional: false, required: false
  private _objectNumberFormat = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskObjectNumberFormatList(this, "object_number_format", false);
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // web_vtt_object_name - computed: true, optional: false, required: false
  public get webVttObjectName() {
    return this.getStringAttribute('web_vtt_object_name');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // initial_value - computed: true, optional: false, required: false
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // place_holder - computed: true, optional: false, required: false
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // image_content - computed: true, optional: false, required: false
  private _imageContent = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentList(this, "image_content", false);
  public get imageContent() {
    return this._imageContent;
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // image_template - computed: true, optional: false, required: false
  private _imageTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateList(this, "image_template", false);
  public get imageTemplate() {
    return this._imageTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // raw_parameter - computed: true, optional: false, required: false
  private _rawParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterList(this, "raw_parameter", false);
  public get rawParameter() {
    return this._rawParameter;
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // object_number_format - computed: true, optional: false, required: false
  private _objectNumberFormat = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatList(this, "object_number_format", false);
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // watermark_set - computed: true, optional: false, required: false
  private _watermarkSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // initial_value - computed: true, optional: false, required: false
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // place_holder - computed: true, optional: false, required: false
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // image_content - computed: true, optional: false, required: false
  private _imageContent = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentList(this, "image_content", false);
  public get imageContent() {
    return this._imageContent;
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // image_template - computed: true, optional: false, required: false
  private _imageTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateList(this, "image_template", false);
  public get imageTemplate() {
    return this._imageTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // raw_parameter - computed: true, optional: false, required: false
  private _rawParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterList(this, "raw_parameter", false);
  public get rawParameter() {
    return this._rawParameter;
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // ext_time_offset_set - computed: true, optional: false, required: false
  public get extTimeOffsetSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ext_time_offset_set'));
  }

  // object_number_format - computed: true, optional: false, required: false
  private _objectNumberFormat = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatList(this, "object_number_format", false);
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // watermark_set - computed: true, optional: false, required: false
  private _watermarkSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // head_set - computed: true, optional: false, required: false
  private _headSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetList(this, "head_set", false);
  public get headSet() {
    return this._headSet;
  }

  // tail_set - computed: true, optional: false, required: false
  private _tailSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetList(this, "tail_set", false);
  public get tailSet() {
    return this._tailSet;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormat {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // initial_value - computed: true, optional: false, required: false
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // place_holder - computed: true, optional: false, required: false
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subtitle - computed: true, optional: false, required: false
  private _subtitle = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleList(this, "subtitle", false);
  public get subtitle() {
    return this._subtitle;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_channel - computed: true, optional: false, required: false
  public get audioChannel() {
    return this.getNumberAttribute('audio_channel');
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }

  // stream_selects - computed: true, optional: false, required: false
  public get streamSelects() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('stream_selects')));
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_alpha - computed: true, optional: false, required: false
  public get fontAlpha() {
    return this.getNumberAttribute('font_alpha');
  }

  // font_color - computed: true, optional: false, required: false
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }

  // font_size - computed: true, optional: false, required: false
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }

  // font_type - computed: true, optional: false, required: false
  public get fontType() {
    return this.getStringAttribute('font_type');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // stream_index - computed: true, optional: false, required: false
  public get streamIndex() {
    return this.getNumberAttribute('stream_index');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bitrate - computed: true, optional: false, required: false
  public get maxVideoBitrate() {
    return this.getNumberAttribute('max_video_bitrate');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // content_adapt_stream - computed: true, optional: false, required: false
  public get contentAdaptStream() {
    return this.getNumberAttribute('content_adapt_stream');
  }

  // fill_type - computed: true, optional: false, required: false
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }

  // fps - computed: true, optional: false, required: false
  public get fps() {
    return this.getNumberAttribute('fps');
  }

  // gop - computed: true, optional: false, required: false
  public get gop() {
    return this.getNumberAttribute('gop');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // resolution_adaptive - computed: true, optional: false, required: false
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }

  // vcrf - computed: true, optional: false, required: false
  public get vcrf() {
    return this.getNumberAttribute('vcrf');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_on_subtitles - computed: true, optional: false, required: false
  private _addOnSubtitles = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }

  // addon_audio_stream - computed: true, optional: false, required: false
  private _addonAudioStream = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamList(this, "addon_audio_stream", false);
  public get addonAudioStream() {
    return this._addonAudioStream;
  }

  // audio_template - computed: true, optional: false, required: false
  private _audioTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateList(this, "audio_template", false);
  public get audioTemplate() {
    return this._audioTemplate;
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // remove_audio - computed: true, optional: false, required: false
  public get removeAudio() {
    return this.getNumberAttribute('remove_audio');
  }

  // remove_video - computed: true, optional: false, required: false
  public get removeVideo() {
    return this.getNumberAttribute('remove_video');
  }

  // std_ext_info - computed: true, optional: false, required: false
  public get stdExtInfo() {
    return this.getStringAttribute('std_ext_info');
  }

  // subtitle_template - computed: true, optional: false, required: false
  private _subtitleTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateList(this, "subtitle_template", false);
  public get subtitleTemplate() {
    return this._subtitleTemplate;
  }

  // tehd_config - computed: true, optional: false, required: false
  private _tehdConfig = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigList(this, "tehd_config", false);
  public get tehdConfig() {
    return this._tehdConfig;
  }

  // video_template - computed: true, optional: false, required: false
  private _videoTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateList(this, "video_template", false);
  public get videoTemplate() {
    return this._videoTemplate;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_channel - computed: true, optional: false, required: false
  public get audioChannel() {
    return this.getNumberAttribute('audio_channel');
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfig {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bitrate - computed: true, optional: false, required: false
  public get maxVideoBitrate() {
    return this.getNumberAttribute('max_video_bitrate');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // fill_type - computed: true, optional: false, required: false
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }

  // fps - computed: true, optional: false, required: false
  public get fps() {
    return this.getNumberAttribute('fps');
  }

  // gop - computed: true, optional: false, required: false
  public get gop() {
    return this.getNumberAttribute('gop');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // resolution_adaptive - computed: true, optional: false, required: false
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }

  // vcrf - computed: true, optional: false, required: false
  public get vcrf() {
    return this.getNumberAttribute('vcrf');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_template - computed: true, optional: false, required: false
  private _audioTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateList(this, "audio_template", false);
  public get audioTemplate() {
    return this._audioTemplate;
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // remove_audio - computed: true, optional: false, required: false
  public get removeAudio() {
    return this.getNumberAttribute('remove_audio');
  }

  // remove_video - computed: true, optional: false, required: false
  public get removeVideo() {
    return this.getNumberAttribute('remove_video');
  }

  // tehd_config - computed: true, optional: false, required: false
  private _tehdConfig = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterTehdConfigList(this, "tehd_config", false);
  public get tehdConfig() {
    return this._tehdConfig;
  }

  // video_template - computed: true, optional: false, required: false
  private _videoTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateList(this, "video_template", false);
  public get videoTemplate() {
    return this._videoTemplate;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object - computed: true, optional: false, required: false
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_input_info - computed: true, optional: false, required: false
  private _cosInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList(this, "cos_input_info", false);
  public get cosInputInfo() {
    return this._cosInputInfo;
  }

  // s3_input_info - computed: true, optional: false, required: false
  private _s3InputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList(this, "s3_input_info", false);
  public get s3InputInfo() {
    return this._s3InputInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_input_info - computed: true, optional: false, required: false
  private _urlInputInfo = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList(this, "url_input_info", false);
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // image_content - computed: true, optional: false, required: false
  private _imageContent = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentList(this, "image_content", false);
  public get imageContent() {
    return this._imageContent;
  }

  // repeat_type - computed: true, optional: false, required: false
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // image_template - computed: true, optional: false, required: false
  private _imageTemplate = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateList(this, "image_template", false);
  public get imageTemplate() {
    return this._imageTemplate;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // raw_parameter - computed: true, optional: false, required: false
  private _rawParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterList(this, "raw_parameter", false);
  public get rawParameter() {
    return this._rawParameter;
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTask {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getNumberAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // head_tail_parameter - computed: true, optional: false, required: false
  private _headTailParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskHeadTailParameterList(this, "head_tail_parameter", false);
  public get headTailParameter() {
    return this._headTailParameter;
  }

  // mosaic_set - computed: true, optional: false, required: false
  private _mosaicSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskMosaicSetList(this, "mosaic_set", false);
  public get mosaicSet() {
    return this._mosaicSet;
  }

  // object_number_format - computed: true, optional: false, required: false
  private _objectNumberFormat = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskObjectNumberFormatList(this, "object_number_format", false);
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }

  // output_object_path - computed: true, optional: false, required: false
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // override_parameter - computed: true, optional: false, required: false
  private _overrideParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOverrideParameterList(this, "override_parameter", false);
  public get overrideParameter() {
    return this._overrideParameter;
  }

  // raw_parameter - computed: true, optional: false, required: false
  private _rawParameter = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskRawParameterList(this, "raw_parameter", false);
  public get rawParameter() {
    return this._rawParameter;
  }

  // segment_object_name - computed: true, optional: false, required: false
  public get segmentObjectName() {
    return this.getStringAttribute('segment_object_name');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // watermark_set - computed: true, optional: false, required: false
  private _watermarkSet = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityPara {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityPara | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityPara | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adaptive_dynamic_streaming_task - computed: true, optional: false, required: false
  private _adaptiveDynamicStreamingTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAdaptiveDynamicStreamingTaskList(this, "adaptive_dynamic_streaming_task", false);
  public get adaptiveDynamicStreamingTask() {
    return this._adaptiveDynamicStreamingTask;
  }

  // ai_analysis_task - computed: true, optional: false, required: false
  private _aiAnalysisTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiAnalysisTaskList(this, "ai_analysis_task", false);
  public get aiAnalysisTask() {
    return this._aiAnalysisTask;
  }

  // ai_content_review_task - computed: true, optional: false, required: false
  private _aiContentReviewTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiContentReviewTaskList(this, "ai_content_review_task", false);
  public get aiContentReviewTask() {
    return this._aiContentReviewTask;
  }

  // ai_recognition_task - computed: true, optional: false, required: false
  private _aiRecognitionTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAiRecognitionTaskList(this, "ai_recognition_task", false);
  public get aiRecognitionTask() {
    return this._aiRecognitionTask;
  }

  // animated_graphic_task - computed: true, optional: false, required: false
  private _animatedGraphicTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaAnimatedGraphicTaskList(this, "animated_graphic_task", false);
  public get animatedGraphicTask() {
    return this._animatedGraphicTask;
  }

  // image_sprite_task - computed: true, optional: false, required: false
  private _imageSpriteTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaImageSpriteTaskList(this, "image_sprite_task", false);
  public get imageSpriteTask() {
    return this._imageSpriteTask;
  }

  // sample_snapshot_task - computed: true, optional: false, required: false
  private _sampleSnapshotTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSampleSnapshotTaskList(this, "sample_snapshot_task", false);
  public get sampleSnapshotTask() {
    return this._sampleSnapshotTask;
  }

  // snapshot_by_time_offset_task - computed: true, optional: false, required: false
  private _snapshotByTimeOffsetTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaSnapshotByTimeOffsetTaskList(this, "snapshot_by_time_offset_task", false);
  public get snapshotByTimeOffsetTask() {
    return this._snapshotByTimeOffsetTask;
  }

  // transcode_task - computed: true, optional: false, required: false
  private _transcodeTask = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaTranscodeTaskList(this, "transcode_task", false);
  public get transcodeTask() {
    return this._transcodeTask;
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetActivities {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetActivitiesToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_para - computed: true, optional: false, required: false
  private _activityPara = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesActivityParaList(this, "activity_para", false);
  public get activityPara() {
    return this._activityPara;
  }

  // activity_type - computed: true, optional: false, required: false
  public get activityType() {
    return this.getStringAttribute('activity_type');
  }

  // reardrive_index - computed: true, optional: false, required: false
  public get reardriveIndex() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('reardrive_index')));
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorage {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cos_output_storage - computed: true, optional: false, required: false
  private _cosOutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageCosOutputStorageList(this, "cos_output_storage", false);
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }

  // s3_output_storage - computed: true, optional: false, required: false
  private _s3OutputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageS3OutputStorageList(this, "s3_output_storage", false);
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqs {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }

  // sqs_queue_name - computed: true, optional: false, required: false
  public get sqsQueueName() {
    return this.getStringAttribute('sqs_queue_name');
  }

  // sqs_region - computed: true, optional: false, required: false
  public get sqsRegion() {
    return this.getStringAttribute('sqs_region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfig {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_sqs - computed: true, optional: false, required: false
  private _awsSqs = new DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigAwsSqsList(this, "aws_sqs", false);
  public get awsSqs() {
    return this._awsSqs;
  }

  // cmq_model - computed: true, optional: false, required: false
  public get cmqModel() {
    return this.getStringAttribute('cmq_model');
  }

  // cmq_region - computed: true, optional: false, required: false
  public get cmqRegion() {
    return this.getStringAttribute('cmq_region');
  }

  // notify_mode - computed: true, optional: false, required: false
  public get notifyMode() {
    return this.getStringAttribute('notify_mode');
  }

  // notify_type - computed: true, optional: false, required: false
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }

  // notify_url - computed: true, optional: false, required: false
  public get notifyUrl() {
    return this.getStringAttribute('notify_url');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqs {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }

  // sqs_queue_name - computed: true, optional: false, required: false
  public get sqsQueueName() {
    return this.getStringAttribute('sqs_queue_name');
  }

  // sqs_region - computed: true, optional: false, required: false
  public get sqsRegion() {
    return this.getStringAttribute('sqs_region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
