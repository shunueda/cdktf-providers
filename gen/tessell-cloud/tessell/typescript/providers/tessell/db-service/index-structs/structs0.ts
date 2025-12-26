import * as cdktf from 'cdktf';
export interface DbServiceClonedFromInfo {
}

export function dbServiceClonedFromInfoToTerraform(struct?: DbServiceClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceClonedFromInfoToHclTerraform(struct?: DbServiceClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceClonedFromInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_machine - computed: true, optional: false, required: false
  public get availabilityMachine() {
    return this.getStringAttribute('availability_machine');
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // clone_type - computed: true, optional: false, required: false
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // maximum_recoverability - computed: true, optional: false, required: false
  public get maximumRecoverability() {
    return this.getBooleanAttribute('maximum_recoverability');
  }

  // pitr_time - computed: true, optional: false, required: false
  public get pitrTime() {
    return this.getStringAttribute('pitr_time');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }

  // tessell_service - computed: true, optional: false, required: false
  public get tessellService() {
    return this.getStringAttribute('tessell_service');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DbServiceClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceClonedFromInfoOutputReference {
    return new DbServiceClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceContextInfo {
}

export function dbServiceContextInfoToTerraform(struct?: DbServiceContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceContextInfoToHclTerraform(struct?: DbServiceContextInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceContextInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceContextInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceContextInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // sub_status - computed: true, optional: false, required: false
  public get subStatus() {
    return this.getStringAttribute('sub_status');
  }
}

export class DbServiceContextInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceContextInfoOutputReference {
    return new DbServiceContextInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceDeletionScheduleDeletionConfig {
}

export function dbServiceDeletionScheduleDeletionConfigToTerraform(struct?: DbServiceDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceDeletionScheduleDeletionConfigToHclTerraform(struct?: DbServiceDeletionScheduleDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceDeletionScheduleDeletionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceDeletionScheduleDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDeletionScheduleDeletionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_availability_machine - computed: true, optional: false, required: false
  public get retainAvailabilityMachine() {
    return this.getBooleanAttribute('retain_availability_machine');
  }
}

export class DbServiceDeletionScheduleDeletionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceDeletionScheduleDeletionConfigOutputReference {
    return new DbServiceDeletionScheduleDeletionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceDeletionSchedule {
}

export function dbServiceDeletionScheduleToTerraform(struct?: DbServiceDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceDeletionScheduleToHclTerraform(struct?: DbServiceDeletionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceDeletionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceDeletionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDeletionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_at - computed: true, optional: false, required: false
  public get deleteAt() {
    return this.getStringAttribute('delete_at');
  }

  // deletion_config - computed: true, optional: false, required: false
  private _deletionConfig = new DbServiceDeletionScheduleDeletionConfigList(this, "deletion_config", false);
  public get deletionConfig() {
    return this._deletionConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DbServiceDeletionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceDeletionScheduleOutputReference {
    return new DbServiceDeletionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRefreshInfoScriptInfoPostScriptInfo {
}

export function dbServiceRefreshInfoScriptInfoPostScriptInfoToTerraform(struct?: DbServiceRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceRefreshInfoScriptInfoPostScriptInfoToHclTerraform(struct?: DbServiceRefreshInfoScriptInfoPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceRefreshInfoScriptInfoPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRefreshInfoScriptInfoPostScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DbServiceRefreshInfoScriptInfoPostScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference {
    return new DbServiceRefreshInfoScriptInfoPostScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRefreshInfoScriptInfoPreScriptInfo {
}

export function dbServiceRefreshInfoScriptInfoPreScriptInfoToTerraform(struct?: DbServiceRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceRefreshInfoScriptInfoPreScriptInfoToHclTerraform(struct?: DbServiceRefreshInfoScriptInfoPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceRefreshInfoScriptInfoPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRefreshInfoScriptInfoPreScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
}

export class DbServiceRefreshInfoScriptInfoPreScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference {
    return new DbServiceRefreshInfoScriptInfoPreScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRefreshInfoScriptInfo {
}

export function dbServiceRefreshInfoScriptInfoToTerraform(struct?: DbServiceRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceRefreshInfoScriptInfoToHclTerraform(struct?: DbServiceRefreshInfoScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceRefreshInfoScriptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceRefreshInfoScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRefreshInfoScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_script_info - computed: true, optional: false, required: false
  private _postScriptInfo = new DbServiceRefreshInfoScriptInfoPostScriptInfoList(this, "post_script_info", false);
  public get postScriptInfo() {
    return this._postScriptInfo;
  }

  // pre_script_info - computed: true, optional: false, required: false
  private _preScriptInfo = new DbServiceRefreshInfoScriptInfoPreScriptInfoList(this, "pre_script_info", false);
  public get preScriptInfo() {
    return this._preScriptInfo;
  }
}

export class DbServiceRefreshInfoScriptInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceRefreshInfoScriptInfoOutputReference {
    return new DbServiceRefreshInfoScriptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRefreshInfo {
}

export function dbServiceRefreshInfoToTerraform(struct?: DbServiceRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceRefreshInfoToHclTerraform(struct?: DbServiceRefreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceRefreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceRefreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRefreshInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // last_successful_refresh_time - computed: true, optional: false, required: false
  public get lastSuccessfulRefreshTime() {
    return this.getStringAttribute('last_successful_refresh_time');
  }

  // pitr - computed: true, optional: false, required: false
  public get pitr() {
    return this.getStringAttribute('pitr');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // script_info - computed: true, optional: false, required: false
  private _scriptInfo = new DbServiceRefreshInfoScriptInfoList(this, "script_info", false);
  public get scriptInfo() {
    return this._scriptInfo;
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }
}

export class DbServiceRefreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceRefreshInfoOutputReference {
    return new DbServiceRefreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceUpcomingScheduledActionsDelete {
}

export function dbServiceUpcomingScheduledActionsDeleteToTerraform(struct?: DbServiceUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceUpcomingScheduledActionsDeleteToHclTerraform(struct?: DbServiceUpcomingScheduledActionsDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceUpcomingScheduledActionsDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceUpcomingScheduledActionsDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceUpcomingScheduledActionsDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}

export class DbServiceUpcomingScheduledActionsDeleteList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceUpcomingScheduledActionsDeleteOutputReference {
    return new DbServiceUpcomingScheduledActionsDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceUpcomingScheduledActionsPatch {
}

export function dbServiceUpcomingScheduledActionsPatchToTerraform(struct?: DbServiceUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceUpcomingScheduledActionsPatchToHclTerraform(struct?: DbServiceUpcomingScheduledActionsPatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceUpcomingScheduledActionsPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceUpcomingScheduledActionsPatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceUpcomingScheduledActionsPatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DbServiceUpcomingScheduledActionsPatchList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceUpcomingScheduledActionsPatchOutputReference {
    return new DbServiceUpcomingScheduledActionsPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceUpcomingScheduledActionsStartStop {
}

export function dbServiceUpcomingScheduledActionsStartStopToTerraform(struct?: DbServiceUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceUpcomingScheduledActionsStartStopToHclTerraform(struct?: DbServiceUpcomingScheduledActionsStartStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceUpcomingScheduledActionsStartStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceUpcomingScheduledActionsStartStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceUpcomingScheduledActionsStartStop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getStringAttribute('at');
  }
}

export class DbServiceUpcomingScheduledActionsStartStopList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceUpcomingScheduledActionsStartStopOutputReference {
    return new DbServiceUpcomingScheduledActionsStartStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceUpcomingScheduledActions {
}

export function dbServiceUpcomingScheduledActionsToTerraform(struct?: DbServiceUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceUpcomingScheduledActionsToHclTerraform(struct?: DbServiceUpcomingScheduledActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceUpcomingScheduledActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceUpcomingScheduledActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceUpcomingScheduledActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete - computed: true, optional: false, required: false
  private _delete = new DbServiceUpcomingScheduledActionsDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }

  // patch - computed: true, optional: false, required: false
  private _patch = new DbServiceUpcomingScheduledActionsPatchList(this, "patch", false);
  public get patch() {
    return this._patch;
  }

  // start_stop - computed: true, optional: false, required: false
  private _startStop = new DbServiceUpcomingScheduledActionsStartStopList(this, "start_stop", false);
  public get startStop() {
    return this._startStop;
  }
}

export class DbServiceUpcomingScheduledActionsList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceUpcomingScheduledActionsOutputReference {
    return new DbServiceUpcomingScheduledActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceUpdatesInProgress {
}

export function dbServiceUpdatesInProgressToTerraform(struct?: DbServiceUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceUpdatesInProgressToHclTerraform(struct?: DbServiceUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceUpdatesInProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new cdktf.StringMap(this, "update_info");
  public get updateInfo() {
    return this._updateInfo;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DbServiceUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceUpdatesInProgressOutputReference {
    return new DbServiceUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceCreds {
  /**
  * DB Service's master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#master_password DbService#master_password}
  */
  readonly masterPassword: string;
  /**
  * DB Service's master username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#master_user DbService#master_user}
  */
  readonly masterUser: string;
}

export function dbServiceCredsToTerraform(struct?: DbServiceCredsOutputReference | DbServiceCreds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_password: cdktf.stringToTerraform(struct!.masterPassword),
    master_user: cdktf.stringToTerraform(struct!.masterUser),
  }
}


export function dbServiceCredsToHclTerraform(struct?: DbServiceCredsOutputReference | DbServiceCreds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_password: {
      value: cdktf.stringToHclTerraform(struct!.masterPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user: {
      value: cdktf.stringToHclTerraform(struct!.masterUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceCredsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceCreds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPassword = this._masterPassword;
    }
    if (this._masterUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUser = this._masterUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceCreds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterPassword = undefined;
      this._masterUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterPassword = value.masterPassword;
      this._masterUser = value.masterUser;
    }
  }

  // master_password - computed: false, optional: false, required: true
  private _masterPassword?: string; 
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string) {
    this._masterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword;
  }

  // master_user - computed: false, optional: false, required: true
  private _masterUser?: string; 
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }
  public set masterUser(value: string) {
    this._masterUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserInput() {
    return this._masterUser;
  }
}
export interface DbServiceDatabasesClonedFromInfo {
}

export function dbServiceDatabasesClonedFromInfoToTerraform(struct?: DbServiceDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceDatabasesClonedFromInfoToHclTerraform(struct?: DbServiceDatabasesClonedFromInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceDatabasesClonedFromInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceDatabasesClonedFromInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesClonedFromInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
}

export class DbServiceDatabasesClonedFromInfoList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceDatabasesClonedFromInfoOutputReference {
    return new DbServiceDatabasesClonedFromInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceDatabasesConnectString {
}

export function dbServiceDatabasesConnectStringToTerraform(struct?: DbServiceDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceDatabasesConnectStringToHclTerraform(struct?: DbServiceDatabasesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceDatabasesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceDatabasesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesConnectString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}

export class DbServiceDatabasesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceDatabasesConnectStringOutputReference {
    return new DbServiceDatabasesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceDatabasesDatabaseConfigurationMilvusConfig {
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceDatabasesDatabaseConfigurationMilvusConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceDatabasesDatabaseConfigurationMilvusConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationMilvusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceDatabasesDatabaseConfigurationMongodbConfig {
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceDatabasesDatabaseConfigurationMongodbConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceDatabasesDatabaseConfigurationMongodbConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationMongodbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceDatabasesDatabaseConfigurationMysqlConfig {
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceDatabasesDatabaseConfigurationMysqlConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceDatabasesDatabaseConfigurationMysqlConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference | DbServiceDatabasesDatabaseConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationMysqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optionProfileId = undefined;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optionProfileId = value.optionProfileId;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceDatabasesDatabaseConfigurationOracleConfig {
  /**
  * The option profile id for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#options_profile DbService#options_profile}
  */
  readonly optionsProfile?: string;
  /**
  * The parameter profile id for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
  /**
  * Username for the oracle database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#username DbService#username}
  */
  readonly username?: string;
}

export function dbServiceDatabasesDatabaseConfigurationOracleConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference | DbServiceDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    options_profile: cdktf.stringToTerraform(struct!.optionsProfile),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dbServiceDatabasesDatabaseConfigurationOracleConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference | DbServiceDatabasesDatabaseConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options_profile: {
      value: cdktf.stringToHclTerraform(struct!.optionsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._optionsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsProfile = this._optionsProfile;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optionProfileId = undefined;
      this._optionsProfile = undefined;
      this._parameterProfileId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optionProfileId = value.optionProfileId;
      this._optionsProfile = value.optionsProfile;
      this._parameterProfileId = value.parameterProfileId;
      this._username = value.username;
    }
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // options_profile - computed: true, optional: true, required: false
  private _optionsProfile?: string; 
  public get optionsProfile() {
    return this.getStringAttribute('options_profile');
  }
  public set optionsProfile(value: string) {
    this._optionsProfile = value;
  }
  public resetOptionsProfile() {
    this._optionsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsProfileInput() {
    return this._optionsProfile;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DbServiceDatabasesDatabaseConfigurationPostgresqlConfig {
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceDatabasesDatabaseConfigurationPostgresqlConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference | DbServiceDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceDatabasesDatabaseConfigurationPostgresqlConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference | DbServiceDatabasesDatabaseConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationPostgresqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optionProfileId = undefined;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optionProfileId = value.optionProfileId;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceDatabasesDatabaseConfigurationSqlServerConfig {
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceDatabasesDatabaseConfigurationSqlServerConfigToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference | DbServiceDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceDatabasesDatabaseConfigurationSqlServerConfigToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference | DbServiceDatabasesDatabaseConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfigurationSqlServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceDatabasesDatabaseConfiguration {
  /**
  * milvus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#milvus_config DbService#milvus_config}
  */
  readonly milvusConfig?: DbServiceDatabasesDatabaseConfigurationMilvusConfig;
  /**
  * mongodb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#mongodb_config DbService#mongodb_config}
  */
  readonly mongodbConfig?: DbServiceDatabasesDatabaseConfigurationMongodbConfig;
  /**
  * mysql_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#mysql_config DbService#mysql_config}
  */
  readonly mysqlConfig?: DbServiceDatabasesDatabaseConfigurationMysqlConfig;
  /**
  * oracle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#oracle_config DbService#oracle_config}
  */
  readonly oracleConfig?: DbServiceDatabasesDatabaseConfigurationOracleConfig;
  /**
  * postgresql_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#postgresql_config DbService#postgresql_config}
  */
  readonly postgresqlConfig?: DbServiceDatabasesDatabaseConfigurationPostgresqlConfig;
  /**
  * sql_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#sql_server_config DbService#sql_server_config}
  */
  readonly sqlServerConfig?: DbServiceDatabasesDatabaseConfigurationSqlServerConfig;
}

export function dbServiceDatabasesDatabaseConfigurationToTerraform(struct?: DbServiceDatabasesDatabaseConfigurationOutputReference | DbServiceDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    milvus_config: dbServiceDatabasesDatabaseConfigurationMilvusConfigToTerraform(struct!.milvusConfig),
    mongodb_config: dbServiceDatabasesDatabaseConfigurationMongodbConfigToTerraform(struct!.mongodbConfig),
    mysql_config: dbServiceDatabasesDatabaseConfigurationMysqlConfigToTerraform(struct!.mysqlConfig),
    oracle_config: dbServiceDatabasesDatabaseConfigurationOracleConfigToTerraform(struct!.oracleConfig),
    postgresql_config: dbServiceDatabasesDatabaseConfigurationPostgresqlConfigToTerraform(struct!.postgresqlConfig),
    sql_server_config: dbServiceDatabasesDatabaseConfigurationSqlServerConfigToTerraform(struct!.sqlServerConfig),
  }
}


export function dbServiceDatabasesDatabaseConfigurationToHclTerraform(struct?: DbServiceDatabasesDatabaseConfigurationOutputReference | DbServiceDatabasesDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    milvus_config: {
      value: dbServiceDatabasesDatabaseConfigurationMilvusConfigToHclTerraform(struct!.milvusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationMilvusConfigList",
    },
    mongodb_config: {
      value: dbServiceDatabasesDatabaseConfigurationMongodbConfigToHclTerraform(struct!.mongodbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationMongodbConfigList",
    },
    mysql_config: {
      value: dbServiceDatabasesDatabaseConfigurationMysqlConfigToHclTerraform(struct!.mysqlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationMysqlConfigList",
    },
    oracle_config: {
      value: dbServiceDatabasesDatabaseConfigurationOracleConfigToHclTerraform(struct!.oracleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationOracleConfigList",
    },
    postgresql_config: {
      value: dbServiceDatabasesDatabaseConfigurationPostgresqlConfigToHclTerraform(struct!.postgresqlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationPostgresqlConfigList",
    },
    sql_server_config: {
      value: dbServiceDatabasesDatabaseConfigurationSqlServerConfigToHclTerraform(struct!.sqlServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationSqlServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDatabasesDatabaseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._milvusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.milvusConfig = this._milvusConfig?.internalValue;
    }
    if (this._mongodbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbConfig = this._mongodbConfig?.internalValue;
    }
    if (this._mysqlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlConfig = this._mysqlConfig?.internalValue;
    }
    if (this._oracleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConfig = this._oracleConfig?.internalValue;
    }
    if (this._postgresqlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlConfig = this._postgresqlConfig?.internalValue;
    }
    if (this._sqlServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerConfig = this._sqlServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabasesDatabaseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._milvusConfig.internalValue = undefined;
      this._mongodbConfig.internalValue = undefined;
      this._mysqlConfig.internalValue = undefined;
      this._oracleConfig.internalValue = undefined;
      this._postgresqlConfig.internalValue = undefined;
      this._sqlServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._milvusConfig.internalValue = value.milvusConfig;
      this._mongodbConfig.internalValue = value.mongodbConfig;
      this._mysqlConfig.internalValue = value.mysqlConfig;
      this._oracleConfig.internalValue = value.oracleConfig;
      this._postgresqlConfig.internalValue = value.postgresqlConfig;
      this._sqlServerConfig.internalValue = value.sqlServerConfig;
    }
  }

  // milvus_config - computed: false, optional: true, required: false
  private _milvusConfig = new DbServiceDatabasesDatabaseConfigurationMilvusConfigOutputReference(this, "milvus_config");
  public get milvusConfig() {
    return this._milvusConfig;
  }
  public putMilvusConfig(value: DbServiceDatabasesDatabaseConfigurationMilvusConfig) {
    this._milvusConfig.internalValue = value;
  }
  public resetMilvusConfig() {
    this._milvusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milvusConfigInput() {
    return this._milvusConfig.internalValue;
  }

  // mongodb_config - computed: false, optional: true, required: false
  private _mongodbConfig = new DbServiceDatabasesDatabaseConfigurationMongodbConfigOutputReference(this, "mongodb_config");
  public get mongodbConfig() {
    return this._mongodbConfig;
  }
  public putMongodbConfig(value: DbServiceDatabasesDatabaseConfigurationMongodbConfig) {
    this._mongodbConfig.internalValue = value;
  }
  public resetMongodbConfig() {
    this._mongodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConfigInput() {
    return this._mongodbConfig.internalValue;
  }

  // mysql_config - computed: false, optional: true, required: false
  private _mysqlConfig = new DbServiceDatabasesDatabaseConfigurationMysqlConfigOutputReference(this, "mysql_config");
  public get mysqlConfig() {
    return this._mysqlConfig;
  }
  public putMysqlConfig(value: DbServiceDatabasesDatabaseConfigurationMysqlConfig) {
    this._mysqlConfig.internalValue = value;
  }
  public resetMysqlConfig() {
    this._mysqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigInput() {
    return this._mysqlConfig.internalValue;
  }

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new DbServiceDatabasesDatabaseConfigurationOracleConfigOutputReference(this, "oracle_config");
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: DbServiceDatabasesDatabaseConfigurationOracleConfig) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }

  // postgresql_config - computed: false, optional: true, required: false
  private _postgresqlConfig = new DbServiceDatabasesDatabaseConfigurationPostgresqlConfigOutputReference(this, "postgresql_config");
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }
  public putPostgresqlConfig(value: DbServiceDatabasesDatabaseConfigurationPostgresqlConfig) {
    this._postgresqlConfig.internalValue = value;
  }
  public resetPostgresqlConfig() {
    this._postgresqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConfigInput() {
    return this._postgresqlConfig.internalValue;
  }

  // sql_server_config - computed: false, optional: true, required: false
  private _sqlServerConfig = new DbServiceDatabasesDatabaseConfigurationSqlServerConfigOutputReference(this, "sql_server_config");
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
  public putSqlServerConfig(value: DbServiceDatabasesDatabaseConfigurationSqlServerConfig) {
    this._sqlServerConfig.internalValue = value;
  }
  public resetSqlServerConfig() {
    this._sqlServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerConfigInput() {
    return this._sqlServerConfig.internalValue;
  }
}
export interface DbServiceDatabases {
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#database_name DbService#database_name}
  */
  readonly databaseName?: string;
  /**
  * Database description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#description DbService#description}
  */
  readonly description?: string;
  /**
  * Required while creating a clone. It specifies the Id of the source database from which the clone is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#source_database_id DbService#source_database_id}
  */
  readonly sourceDatabaseId?: string;
  /**
  * Database created from Tessell platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#tessell_created DbService#tessell_created}
  */
  readonly tessellCreated?: boolean | cdktf.IResolvable;
  /**
  * database_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#database_configuration DbService#database_configuration}
  */
  readonly databaseConfiguration?: DbServiceDatabasesDatabaseConfiguration;
}

export function dbServiceDatabasesToTerraform(struct?: DbServiceDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    description: cdktf.stringToTerraform(struct!.description),
    source_database_id: cdktf.stringToTerraform(struct!.sourceDatabaseId),
    tessell_created: cdktf.booleanToTerraform(struct!.tessellCreated),
    database_configuration: dbServiceDatabasesDatabaseConfigurationToTerraform(struct!.databaseConfiguration),
  }
}


export function dbServiceDatabasesToHclTerraform(struct?: DbServiceDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_database_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tessell_created: {
      value: cdktf.booleanToHclTerraform(struct!.tessellCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_configuration: {
      value: dbServiceDatabasesDatabaseConfigurationToHclTerraform(struct!.databaseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceDatabasesDatabaseConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._sourceDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDatabaseId = this._sourceDatabaseId;
    }
    if (this._tessellCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tessellCreated = this._tessellCreated;
    }
    if (this._databaseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConfiguration = this._databaseConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._description = undefined;
      this._sourceDatabaseId = undefined;
      this._tessellCreated = undefined;
      this._databaseConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._description = value.description;
      this._sourceDatabaseId = value.sourceDatabaseId;
      this._tessellCreated = value.tessellCreated;
      this._databaseConfiguration.internalValue = value.databaseConfiguration;
    }
  }

  // cloned_from_info - computed: true, optional: false, required: false
  private _clonedFromInfo = new DbServiceDatabasesClonedFromInfoList(this, "cloned_from_info", false);
  public get clonedFromInfo() {
    return this._clonedFromInfo;
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DbServiceDatabasesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_database_id - computed: false, optional: true, required: false
  private _sourceDatabaseId?: string; 
  public get sourceDatabaseId() {
    return this.getStringAttribute('source_database_id');
  }
  public set sourceDatabaseId(value: string) {
    this._sourceDatabaseId = value;
  }
  public resetSourceDatabaseId() {
    this._sourceDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseIdInput() {
    return this._sourceDatabaseId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tessell_created - computed: true, optional: true, required: false
  private _tessellCreated?: boolean | cdktf.IResolvable; 
  public get tessellCreated() {
    return this.getBooleanAttribute('tessell_created');
  }
  public set tessellCreated(value: boolean | cdktf.IResolvable) {
    this._tessellCreated = value;
  }
  public resetTessellCreated() {
    this._tessellCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tessellCreatedInput() {
    return this._tessellCreated;
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }

  // database_configuration - computed: false, optional: true, required: false
  private _databaseConfiguration = new DbServiceDatabasesDatabaseConfigurationOutputReference(this, "database_configuration");
  public get databaseConfiguration() {
    return this._databaseConfiguration;
  }
  public putDatabaseConfiguration(value: DbServiceDatabasesDatabaseConfiguration) {
    this._databaseConfiguration.internalValue = value;
  }
  public resetDatabaseConfiguration() {
    this._databaseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigurationInput() {
    return this._databaseConfiguration.internalValue;
  }
}

export class DbServiceDatabasesList extends cdktf.ComplexList {
  public internalValue? : DbServiceDatabases[] | cdktf.IResolvable

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
  public get(index: number): DbServiceDatabasesOutputReference {
    return new DbServiceDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceDeletionConfig {
  /**
  * If specified as true, the associated Availability Machine (snapshots, sanitized-snapshots, logs) would be retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#retain_availability_machine DbService#retain_availability_machine}
  */
  readonly retainAvailabilityMachine?: boolean | cdktf.IResolvable;
}

export function dbServiceDeletionConfigToTerraform(struct?: DbServiceDeletionConfigOutputReference | DbServiceDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_availability_machine: cdktf.booleanToTerraform(struct!.retainAvailabilityMachine),
  }
}


export function dbServiceDeletionConfigToHclTerraform(struct?: DbServiceDeletionConfigOutputReference | DbServiceDeletionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_availability_machine: {
      value: cdktf.booleanToHclTerraform(struct!.retainAvailabilityMachine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceDeletionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceDeletionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainAvailabilityMachine !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAvailabilityMachine = this._retainAvailabilityMachine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceDeletionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainAvailabilityMachine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainAvailabilityMachine = value.retainAvailabilityMachine;
    }
  }

  // retain_availability_machine - computed: false, optional: true, required: false
  private _retainAvailabilityMachine?: boolean | cdktf.IResolvable; 
  public get retainAvailabilityMachine() {
    return this.getBooleanAttribute('retain_availability_machine');
  }
  public set retainAvailabilityMachine(value: boolean | cdktf.IResolvable) {
    this._retainAvailabilityMachine = value;
  }
  public resetRetainAvailabilityMachine() {
    this._retainAvailabilityMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAvailabilityMachineInput() {
    return this._retainAvailabilityMachine;
  }
}
export interface DbServiceEngineConfigurationApacheKafkaConfig {
  /**
  * The parameter profile id for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceEngineConfigurationApacheKafkaConfigToTerraform(struct?: DbServiceEngineConfigurationApacheKafkaConfigOutputReference | DbServiceEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceEngineConfigurationApacheKafkaConfigToHclTerraform(struct?: DbServiceEngineConfigurationApacheKafkaConfigOutputReference | DbServiceEngineConfigurationApacheKafkaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationApacheKafkaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationApacheKafkaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationApacheKafkaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceEngineConfigurationCollationConfig {
  /**
  * Collation name for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#collation_name DbService#collation_name}
  */
  readonly collationName?: string;
}

export function dbServiceEngineConfigurationCollationConfigToTerraform(struct?: DbServiceEngineConfigurationCollationConfigOutputReference | DbServiceEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation_name: cdktf.stringToTerraform(struct!.collationName),
  }
}


export function dbServiceEngineConfigurationCollationConfigToHclTerraform(struct?: DbServiceEngineConfigurationCollationConfigOutputReference | DbServiceEngineConfigurationCollationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation_name: {
      value: cdktf.stringToHclTerraform(struct!.collationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationCollationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationCollationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collationName = this._collationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationCollationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collationName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collationName = value.collationName;
    }
  }

  // collation_name - computed: false, optional: true, required: false
  private _collationName?: string; 
  public get collationName() {
    return this.getStringAttribute('collation_name');
  }
  public set collationName(value: string) {
    this._collationName = value;
  }
  public resetCollationName() {
    this._collationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationNameInput() {
    return this._collationName;
  }
}
export interface DbServiceEngineConfigurationMilvusConfig {
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceEngineConfigurationMilvusConfigToTerraform(struct?: DbServiceEngineConfigurationMilvusConfigOutputReference | DbServiceEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceEngineConfigurationMilvusConfigToHclTerraform(struct?: DbServiceEngineConfigurationMilvusConfigOutputReference | DbServiceEngineConfigurationMilvusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationMilvusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationMilvusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationMilvusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceEngineConfigurationMongodbConfig {
  /**
  * The MongoDB Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#cluster_name DbService#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceEngineConfigurationMongodbConfigToTerraform(struct?: DbServiceEngineConfigurationMongodbConfigOutputReference | DbServiceEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceEngineConfigurationMongodbConfigToHclTerraform(struct?: DbServiceEngineConfigurationMongodbConfigOutputReference | DbServiceEngineConfigurationMongodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationMongodbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationMongodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationMongodbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceEngineConfigurationMysqlConfig {
  /**
  * Active Directory Domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#ad_domain_id DbService#ad_domain_id}
  */
  readonly adDomainId?: string;
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
}

export function dbServiceEngineConfigurationMysqlConfigToTerraform(struct?: DbServiceEngineConfigurationMysqlConfigOutputReference | DbServiceEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain_id: cdktf.stringToTerraform(struct!.adDomainId),
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
  }
}


export function dbServiceEngineConfigurationMysqlConfigToHclTerraform(struct?: DbServiceEngineConfigurationMysqlConfigOutputReference | DbServiceEngineConfigurationMysqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.adDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationMysqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationMysqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainId = this._adDomainId;
    }
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationMysqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomainId = undefined;
      this._optionProfileId = undefined;
      this._parameterProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomainId = value.adDomainId;
      this._optionProfileId = value.optionProfileId;
      this._parameterProfileId = value.parameterProfileId;
    }
  }

  // ad_domain_id - computed: false, optional: true, required: false
  private _adDomainId?: string; 
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }
  public set adDomainId(value: string) {
    this._adDomainId = value;
  }
  public resetAdDomainId() {
    this._adDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainIdInput() {
    return this._adDomainId;
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }
}
export interface DbServiceEngineConfigurationOracleConfig {
  /**
  * The character-set for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#character_set DbService#character_set}
  */
  readonly characterSet?: string;
  /**
  * To explicitly enable archive mode, when PITR is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_archive_mode DbService#enable_archive_mode}
  */
  readonly enableArchiveMode?: boolean | cdktf.IResolvable;
  /**
  * Specify whether the DB Service is multi-tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#multi_tenant DbService#multi_tenant}
  */
  readonly multiTenant?: boolean | cdktf.IResolvable;
  /**
  * The national-character-set for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#national_character_set DbService#national_character_set}
  */
  readonly nationalCharacterSet?: string;
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#options_profile DbService#options_profile}
  */
  readonly optionsProfile?: string;
  /**
  * The parameter profile id for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
  /**
  * SID for oracle database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#sid DbService#sid}
  */
  readonly sid?: string;
}

export function dbServiceEngineConfigurationOracleConfigToTerraform(struct?: DbServiceEngineConfigurationOracleConfigOutputReference | DbServiceEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    enable_archive_mode: cdktf.booleanToTerraform(struct!.enableArchiveMode),
    multi_tenant: cdktf.booleanToTerraform(struct!.multiTenant),
    national_character_set: cdktf.stringToTerraform(struct!.nationalCharacterSet),
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    options_profile: cdktf.stringToTerraform(struct!.optionsProfile),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function dbServiceEngineConfigurationOracleConfigToHclTerraform(struct?: DbServiceEngineConfigurationOracleConfigOutputReference | DbServiceEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_archive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableArchiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_tenant: {
      value: cdktf.booleanToHclTerraform(struct!.multiTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    national_character_set: {
      value: cdktf.stringToHclTerraform(struct!.nationalCharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options_profile: {
      value: cdktf.stringToHclTerraform(struct!.optionsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._enableArchiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableArchiveMode = this._enableArchiveMode;
    }
    if (this._multiTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTenant = this._multiTenant;
    }
    if (this._nationalCharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nationalCharacterSet = this._nationalCharacterSet;
    }
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._optionsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsProfile = this._optionsProfile;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._characterSet = undefined;
      this._enableArchiveMode = undefined;
      this._multiTenant = undefined;
      this._nationalCharacterSet = undefined;
      this._optionProfileId = undefined;
      this._optionsProfile = undefined;
      this._parameterProfileId = undefined;
      this._sid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._characterSet = value.characterSet;
      this._enableArchiveMode = value.enableArchiveMode;
      this._multiTenant = value.multiTenant;
      this._nationalCharacterSet = value.nationalCharacterSet;
      this._optionProfileId = value.optionProfileId;
      this._optionsProfile = value.optionsProfile;
      this._parameterProfileId = value.parameterProfileId;
      this._sid = value.sid;
    }
  }

  // character_set - computed: false, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // enable_archive_mode - computed: false, optional: true, required: false
  private _enableArchiveMode?: boolean | cdktf.IResolvable; 
  public get enableArchiveMode() {
    return this.getBooleanAttribute('enable_archive_mode');
  }
  public set enableArchiveMode(value: boolean | cdktf.IResolvable) {
    this._enableArchiveMode = value;
  }
  public resetEnableArchiveMode() {
    this._enableArchiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableArchiveModeInput() {
    return this._enableArchiveMode;
  }

  // multi_tenant - computed: false, optional: true, required: false
  private _multiTenant?: boolean | cdktf.IResolvable; 
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }
  public set multiTenant(value: boolean | cdktf.IResolvable) {
    this._multiTenant = value;
  }
  public resetMultiTenant() {
    this._multiTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantInput() {
    return this._multiTenant;
  }

  // national_character_set - computed: false, optional: true, required: false
  private _nationalCharacterSet?: string; 
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }
  public set nationalCharacterSet(value: string) {
    this._nationalCharacterSet = value;
  }
  public resetNationalCharacterSet() {
    this._nationalCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nationalCharacterSetInput() {
    return this._nationalCharacterSet;
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // options_profile - computed: true, optional: true, required: false
  private _optionsProfile?: string; 
  public get optionsProfile() {
    return this.getStringAttribute('options_profile');
  }
  public set optionsProfile(value: string) {
    this._optionsProfile = value;
  }
  public resetOptionsProfile() {
    this._optionsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsProfileInput() {
    return this._optionsProfile;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }

  // sid - computed: true, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}
export interface DbServiceEngineConfigurationPostScriptInfo {
  /**
  * The Tessell Script ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#script_id DbService#script_id}
  */
  readonly scriptId?: string;
  /**
  * The Tessell Script version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#script_version DbService#script_version}
  */
  readonly scriptVersion?: string;
}

export function dbServiceEngineConfigurationPostScriptInfoToTerraform(struct?: DbServiceEngineConfigurationPostScriptInfoOutputReference | DbServiceEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_id: cdktf.stringToTerraform(struct!.scriptId),
    script_version: cdktf.stringToTerraform(struct!.scriptVersion),
  }
}


export function dbServiceEngineConfigurationPostScriptInfoToHclTerraform(struct?: DbServiceEngineConfigurationPostScriptInfoOutputReference | DbServiceEngineConfigurationPostScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_id: {
      value: cdktf.stringToHclTerraform(struct!.scriptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_version: {
      value: cdktf.stringToHclTerraform(struct!.scriptVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationPostScriptInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationPostScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptId = this._scriptId;
    }
    if (this._scriptVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVersion = this._scriptVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationPostScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptId = undefined;
      this._scriptVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptId = value.scriptId;
      this._scriptVersion = value.scriptVersion;
    }
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // script_version - computed: false, optional: true, required: false
  private _scriptVersion?: string; 
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
  public set scriptVersion(value: string) {
    this._scriptVersion = value;
  }
  public resetScriptVersion() {
    this._scriptVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVersionInput() {
    return this._scriptVersion;
  }
}
export interface DbServiceEngineConfigurationPostgresqlConfig {
  /**
  * Active Directory Domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#ad_domain_id DbService#ad_domain_id}
  */
  readonly adDomainId?: string;
  /**
  * The options profile for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_id DbService#option_profile_id}
  */
  readonly optionProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#option_profile_name DbService#option_profile_name}
  */
  readonly optionProfileName?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#proxy_port DbService#proxy_port}
  */
  readonly proxyPort?: number;
}

export function dbServiceEngineConfigurationPostgresqlConfigToTerraform(struct?: DbServiceEngineConfigurationPostgresqlConfigOutputReference | DbServiceEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain_id: cdktf.stringToTerraform(struct!.adDomainId),
    option_profile_id: cdktf.stringToTerraform(struct!.optionProfileId),
    option_profile_name: cdktf.stringToTerraform(struct!.optionProfileName),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
  }
}


export function dbServiceEngineConfigurationPostgresqlConfigToHclTerraform(struct?: DbServiceEngineConfigurationPostgresqlConfigOutputReference | DbServiceEngineConfigurationPostgresqlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.adDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.optionProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationPostgresqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationPostgresqlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainId = this._adDomainId;
    }
    if (this._optionProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileId = this._optionProfileId;
    }
    if (this._optionProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionProfileName = this._optionProfileName;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationPostgresqlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomainId = undefined;
      this._optionProfileId = undefined;
      this._optionProfileName = undefined;
      this._parameterProfileId = undefined;
      this._proxyPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomainId = value.adDomainId;
      this._optionProfileId = value.optionProfileId;
      this._optionProfileName = value.optionProfileName;
      this._parameterProfileId = value.parameterProfileId;
      this._proxyPort = value.proxyPort;
    }
  }

  // ad_domain_id - computed: false, optional: true, required: false
  private _adDomainId?: string; 
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }
  public set adDomainId(value: string) {
    this._adDomainId = value;
  }
  public resetAdDomainId() {
    this._adDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainIdInput() {
    return this._adDomainId;
  }

  // option_profile_id - computed: false, optional: true, required: false
  private _optionProfileId?: string; 
  public get optionProfileId() {
    return this.getStringAttribute('option_profile_id');
  }
  public set optionProfileId(value: string) {
    this._optionProfileId = value;
  }
  public resetOptionProfileId() {
    this._optionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileIdInput() {
    return this._optionProfileId;
  }

  // option_profile_name - computed: true, optional: true, required: false
  private _optionProfileName?: string; 
  public get optionProfileName() {
    return this.getStringAttribute('option_profile_name');
  }
  public set optionProfileName(value: string) {
    this._optionProfileName = value;
  }
  public resetOptionProfileName() {
    this._optionProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionProfileNameInput() {
    return this._optionProfileName;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }
}
export interface DbServiceEngineConfigurationPreScriptInfo {
  /**
  * The Tessell Script ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#script_id DbService#script_id}
  */
  readonly scriptId?: string;
  /**
  * The Tessell Script version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#script_version DbService#script_version}
  */
  readonly scriptVersion?: string;
}

export function dbServiceEngineConfigurationPreScriptInfoToTerraform(struct?: DbServiceEngineConfigurationPreScriptInfoOutputReference | DbServiceEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_id: cdktf.stringToTerraform(struct!.scriptId),
    script_version: cdktf.stringToTerraform(struct!.scriptVersion),
  }
}


export function dbServiceEngineConfigurationPreScriptInfoToHclTerraform(struct?: DbServiceEngineConfigurationPreScriptInfoOutputReference | DbServiceEngineConfigurationPreScriptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_id: {
      value: cdktf.stringToHclTerraform(struct!.scriptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_version: {
      value: cdktf.stringToHclTerraform(struct!.scriptVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationPreScriptInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationPreScriptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptId = this._scriptId;
    }
    if (this._scriptVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptVersion = this._scriptVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationPreScriptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptId = undefined;
      this._scriptVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptId = value.scriptId;
      this._scriptVersion = value.scriptVersion;
    }
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // script_version - computed: false, optional: true, required: false
  private _scriptVersion?: string; 
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }
  public set scriptVersion(value: string) {
    this._scriptVersion = value;
  }
  public resetScriptVersion() {
    this._scriptVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptVersionInput() {
    return this._scriptVersion;
  }
}
export interface DbServiceEngineConfigurationSqlServerConfig {
  /**
  * Active Directory Domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#ad_domain_id DbService#ad_domain_id}
  */
  readonly adDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#agent_service_account_user DbService#agent_service_account_user}
  */
  readonly agentServiceAccountUser?: string;
  /**
  * The named instance for SQL Server database (max 16 characters as per SQL Server limitation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#instance_name DbService#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The parameter profile ID for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#parameter_profile_id DbService#parameter_profile_id}
  */
  readonly parameterProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#service_account_user DbService#service_account_user}
  */
  readonly serviceAccountUser?: string;
}

export function dbServiceEngineConfigurationSqlServerConfigToTerraform(struct?: DbServiceEngineConfigurationSqlServerConfigOutputReference | DbServiceEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain_id: cdktf.stringToTerraform(struct!.adDomainId),
    agent_service_account_user: cdktf.stringToTerraform(struct!.agentServiceAccountUser),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    parameter_profile_id: cdktf.stringToTerraform(struct!.parameterProfileId),
    service_account_user: cdktf.stringToTerraform(struct!.serviceAccountUser),
  }
}


export function dbServiceEngineConfigurationSqlServerConfigToHclTerraform(struct?: DbServiceEngineConfigurationSqlServerConfigOutputReference | DbServiceEngineConfigurationSqlServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.adDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_service_account_user: {
      value: cdktf.stringToHclTerraform(struct!.agentServiceAccountUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.parameterProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_user: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationSqlServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfigurationSqlServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainId = this._adDomainId;
    }
    if (this._agentServiceAccountUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentServiceAccountUser = this._agentServiceAccountUser;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._parameterProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterProfileId = this._parameterProfileId;
    }
    if (this._serviceAccountUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUser = this._serviceAccountUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfigurationSqlServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomainId = undefined;
      this._agentServiceAccountUser = undefined;
      this._instanceName = undefined;
      this._parameterProfileId = undefined;
      this._serviceAccountUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomainId = value.adDomainId;
      this._agentServiceAccountUser = value.agentServiceAccountUser;
      this._instanceName = value.instanceName;
      this._parameterProfileId = value.parameterProfileId;
      this._serviceAccountUser = value.serviceAccountUser;
    }
  }

  // ad_domain_id - computed: false, optional: true, required: false
  private _adDomainId?: string; 
  public get adDomainId() {
    return this.getStringAttribute('ad_domain_id');
  }
  public set adDomainId(value: string) {
    this._adDomainId = value;
  }
  public resetAdDomainId() {
    this._adDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainIdInput() {
    return this._adDomainId;
  }

  // agent_service_account_user - computed: false, optional: true, required: false
  private _agentServiceAccountUser?: string; 
  public get agentServiceAccountUser() {
    return this.getStringAttribute('agent_service_account_user');
  }
  public set agentServiceAccountUser(value: string) {
    this._agentServiceAccountUser = value;
  }
  public resetAgentServiceAccountUser() {
    this._agentServiceAccountUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentServiceAccountUserInput() {
    return this._agentServiceAccountUser;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // parameter_profile_id - computed: false, optional: true, required: false
  private _parameterProfileId?: string; 
  public get parameterProfileId() {
    return this.getStringAttribute('parameter_profile_id');
  }
  public set parameterProfileId(value: string) {
    this._parameterProfileId = value;
  }
  public resetParameterProfileId() {
    this._parameterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterProfileIdInput() {
    return this._parameterProfileId;
  }

  // service_account_user - computed: false, optional: true, required: false
  private _serviceAccountUser?: string; 
  public get serviceAccountUser() {
    return this.getStringAttribute('service_account_user');
  }
  public set serviceAccountUser(value: string) {
    this._serviceAccountUser = value;
  }
  public resetServiceAccountUser() {
    this._serviceAccountUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUserInput() {
    return this._serviceAccountUser;
  }
}
export interface DbServiceEngineConfiguration {
  /**
  * The URL where the backup is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_url DbService#backup_url}
  */
  readonly backupUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#ignore_post_script_failure DbService#ignore_post_script_failure}
  */
  readonly ignorePostScriptFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#ignore_pre_script_failure DbService#ignore_pre_script_failure}
  */
  readonly ignorePreScriptFailure?: boolean | cdktf.IResolvable;
  /**
  * apache_kafka_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#apache_kafka_config DbService#apache_kafka_config}
  */
  readonly apacheKafkaConfig?: DbServiceEngineConfigurationApacheKafkaConfig;
  /**
  * collation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#collation_config DbService#collation_config}
  */
  readonly collationConfig?: DbServiceEngineConfigurationCollationConfig;
  /**
  * milvus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#milvus_config DbService#milvus_config}
  */
  readonly milvusConfig?: DbServiceEngineConfigurationMilvusConfig;
  /**
  * mongodb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#mongodb_config DbService#mongodb_config}
  */
  readonly mongodbConfig?: DbServiceEngineConfigurationMongodbConfig;
  /**
  * mysql_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#mysql_config DbService#mysql_config}
  */
  readonly mysqlConfig?: DbServiceEngineConfigurationMysqlConfig;
  /**
  * oracle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#oracle_config DbService#oracle_config}
  */
  readonly oracleConfig?: DbServiceEngineConfigurationOracleConfig;
  /**
  * post_script_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#post_script_info DbService#post_script_info}
  */
  readonly postScriptInfo?: DbServiceEngineConfigurationPostScriptInfo;
  /**
  * postgresql_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#postgresql_config DbService#postgresql_config}
  */
  readonly postgresqlConfig?: DbServiceEngineConfigurationPostgresqlConfig;
  /**
  * pre_script_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#pre_script_info DbService#pre_script_info}
  */
  readonly preScriptInfo?: DbServiceEngineConfigurationPreScriptInfo;
  /**
  * sql_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#sql_server_config DbService#sql_server_config}
  */
  readonly sqlServerConfig?: DbServiceEngineConfigurationSqlServerConfig;
}

export function dbServiceEngineConfigurationToTerraform(struct?: DbServiceEngineConfigurationOutputReference | DbServiceEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_url: cdktf.stringToTerraform(struct!.backupUrl),
    ignore_post_script_failure: cdktf.booleanToTerraform(struct!.ignorePostScriptFailure),
    ignore_pre_script_failure: cdktf.booleanToTerraform(struct!.ignorePreScriptFailure),
    apache_kafka_config: dbServiceEngineConfigurationApacheKafkaConfigToTerraform(struct!.apacheKafkaConfig),
    collation_config: dbServiceEngineConfigurationCollationConfigToTerraform(struct!.collationConfig),
    milvus_config: dbServiceEngineConfigurationMilvusConfigToTerraform(struct!.milvusConfig),
    mongodb_config: dbServiceEngineConfigurationMongodbConfigToTerraform(struct!.mongodbConfig),
    mysql_config: dbServiceEngineConfigurationMysqlConfigToTerraform(struct!.mysqlConfig),
    oracle_config: dbServiceEngineConfigurationOracleConfigToTerraform(struct!.oracleConfig),
    post_script_info: dbServiceEngineConfigurationPostScriptInfoToTerraform(struct!.postScriptInfo),
    postgresql_config: dbServiceEngineConfigurationPostgresqlConfigToTerraform(struct!.postgresqlConfig),
    pre_script_info: dbServiceEngineConfigurationPreScriptInfoToTerraform(struct!.preScriptInfo),
    sql_server_config: dbServiceEngineConfigurationSqlServerConfigToTerraform(struct!.sqlServerConfig),
  }
}


export function dbServiceEngineConfigurationToHclTerraform(struct?: DbServiceEngineConfigurationOutputReference | DbServiceEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_url: {
      value: cdktf.stringToHclTerraform(struct!.backupUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_post_script_failure: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePostScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_pre_script_failure: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePreScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apache_kafka_config: {
      value: dbServiceEngineConfigurationApacheKafkaConfigToHclTerraform(struct!.apacheKafkaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationApacheKafkaConfigList",
    },
    collation_config: {
      value: dbServiceEngineConfigurationCollationConfigToHclTerraform(struct!.collationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationCollationConfigList",
    },
    milvus_config: {
      value: dbServiceEngineConfigurationMilvusConfigToHclTerraform(struct!.milvusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationMilvusConfigList",
    },
    mongodb_config: {
      value: dbServiceEngineConfigurationMongodbConfigToHclTerraform(struct!.mongodbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationMongodbConfigList",
    },
    mysql_config: {
      value: dbServiceEngineConfigurationMysqlConfigToHclTerraform(struct!.mysqlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationMysqlConfigList",
    },
    oracle_config: {
      value: dbServiceEngineConfigurationOracleConfigToHclTerraform(struct!.oracleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationOracleConfigList",
    },
    post_script_info: {
      value: dbServiceEngineConfigurationPostScriptInfoToHclTerraform(struct!.postScriptInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationPostScriptInfoList",
    },
    postgresql_config: {
      value: dbServiceEngineConfigurationPostgresqlConfigToHclTerraform(struct!.postgresqlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationPostgresqlConfigList",
    },
    pre_script_info: {
      value: dbServiceEngineConfigurationPreScriptInfoToHclTerraform(struct!.preScriptInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationPreScriptInfoList",
    },
    sql_server_config: {
      value: dbServiceEngineConfigurationSqlServerConfigToHclTerraform(struct!.sqlServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceEngineConfigurationSqlServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceEngineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupUrl = this._backupUrl;
    }
    if (this._ignorePostScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePostScriptFailure = this._ignorePostScriptFailure;
    }
    if (this._ignorePreScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePreScriptFailure = this._ignorePreScriptFailure;
    }
    if (this._apacheKafkaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apacheKafkaConfig = this._apacheKafkaConfig?.internalValue;
    }
    if (this._collationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collationConfig = this._collationConfig?.internalValue;
    }
    if (this._milvusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.milvusConfig = this._milvusConfig?.internalValue;
    }
    if (this._mongodbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbConfig = this._mongodbConfig?.internalValue;
    }
    if (this._mysqlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlConfig = this._mysqlConfig?.internalValue;
    }
    if (this._oracleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConfig = this._oracleConfig?.internalValue;
    }
    if (this._postScriptInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScriptInfo = this._postScriptInfo?.internalValue;
    }
    if (this._postgresqlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlConfig = this._postgresqlConfig?.internalValue;
    }
    if (this._preScriptInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preScriptInfo = this._preScriptInfo?.internalValue;
    }
    if (this._sqlServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerConfig = this._sqlServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupUrl = undefined;
      this._ignorePostScriptFailure = undefined;
      this._ignorePreScriptFailure = undefined;
      this._apacheKafkaConfig.internalValue = undefined;
      this._collationConfig.internalValue = undefined;
      this._milvusConfig.internalValue = undefined;
      this._mongodbConfig.internalValue = undefined;
      this._mysqlConfig.internalValue = undefined;
      this._oracleConfig.internalValue = undefined;
      this._postScriptInfo.internalValue = undefined;
      this._postgresqlConfig.internalValue = undefined;
      this._preScriptInfo.internalValue = undefined;
      this._sqlServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupUrl = value.backupUrl;
      this._ignorePostScriptFailure = value.ignorePostScriptFailure;
      this._ignorePreScriptFailure = value.ignorePreScriptFailure;
      this._apacheKafkaConfig.internalValue = value.apacheKafkaConfig;
      this._collationConfig.internalValue = value.collationConfig;
      this._milvusConfig.internalValue = value.milvusConfig;
      this._mongodbConfig.internalValue = value.mongodbConfig;
      this._mysqlConfig.internalValue = value.mysqlConfig;
      this._oracleConfig.internalValue = value.oracleConfig;
      this._postScriptInfo.internalValue = value.postScriptInfo;
      this._postgresqlConfig.internalValue = value.postgresqlConfig;
      this._preScriptInfo.internalValue = value.preScriptInfo;
      this._sqlServerConfig.internalValue = value.sqlServerConfig;
    }
  }

  // backup_url - computed: false, optional: true, required: false
  private _backupUrl?: string; 
  public get backupUrl() {
    return this.getStringAttribute('backup_url');
  }
  public set backupUrl(value: string) {
    this._backupUrl = value;
  }
  public resetBackupUrl() {
    this._backupUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupUrlInput() {
    return this._backupUrl;
  }

  // ignore_post_script_failure - computed: false, optional: true, required: false
  private _ignorePostScriptFailure?: boolean | cdktf.IResolvable; 
  public get ignorePostScriptFailure() {
    return this.getBooleanAttribute('ignore_post_script_failure');
  }
  public set ignorePostScriptFailure(value: boolean | cdktf.IResolvable) {
    this._ignorePostScriptFailure = value;
  }
  public resetIgnorePostScriptFailure() {
    this._ignorePostScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePostScriptFailureInput() {
    return this._ignorePostScriptFailure;
  }

  // ignore_pre_script_failure - computed: false, optional: true, required: false
  private _ignorePreScriptFailure?: boolean | cdktf.IResolvable; 
  public get ignorePreScriptFailure() {
    return this.getBooleanAttribute('ignore_pre_script_failure');
  }
  public set ignorePreScriptFailure(value: boolean | cdktf.IResolvable) {
    this._ignorePreScriptFailure = value;
  }
  public resetIgnorePreScriptFailure() {
    this._ignorePreScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePreScriptFailureInput() {
    return this._ignorePreScriptFailure;
  }

  // apache_kafka_config - computed: false, optional: true, required: false
  private _apacheKafkaConfig = new DbServiceEngineConfigurationApacheKafkaConfigOutputReference(this, "apache_kafka_config");
  public get apacheKafkaConfig() {
    return this._apacheKafkaConfig;
  }
  public putApacheKafkaConfig(value: DbServiceEngineConfigurationApacheKafkaConfig) {
    this._apacheKafkaConfig.internalValue = value;
  }
  public resetApacheKafkaConfig() {
    this._apacheKafkaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheKafkaConfigInput() {
    return this._apacheKafkaConfig.internalValue;
  }

  // collation_config - computed: false, optional: true, required: false
  private _collationConfig = new DbServiceEngineConfigurationCollationConfigOutputReference(this, "collation_config");
  public get collationConfig() {
    return this._collationConfig;
  }
  public putCollationConfig(value: DbServiceEngineConfigurationCollationConfig) {
    this._collationConfig.internalValue = value;
  }
  public resetCollationConfig() {
    this._collationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationConfigInput() {
    return this._collationConfig.internalValue;
  }

  // milvus_config - computed: false, optional: true, required: false
  private _milvusConfig = new DbServiceEngineConfigurationMilvusConfigOutputReference(this, "milvus_config");
  public get milvusConfig() {
    return this._milvusConfig;
  }
  public putMilvusConfig(value: DbServiceEngineConfigurationMilvusConfig) {
    this._milvusConfig.internalValue = value;
  }
  public resetMilvusConfig() {
    this._milvusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milvusConfigInput() {
    return this._milvusConfig.internalValue;
  }

  // mongodb_config - computed: false, optional: true, required: false
  private _mongodbConfig = new DbServiceEngineConfigurationMongodbConfigOutputReference(this, "mongodb_config");
  public get mongodbConfig() {
    return this._mongodbConfig;
  }
  public putMongodbConfig(value: DbServiceEngineConfigurationMongodbConfig) {
    this._mongodbConfig.internalValue = value;
  }
  public resetMongodbConfig() {
    this._mongodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConfigInput() {
    return this._mongodbConfig.internalValue;
  }

  // mysql_config - computed: false, optional: true, required: false
  private _mysqlConfig = new DbServiceEngineConfigurationMysqlConfigOutputReference(this, "mysql_config");
  public get mysqlConfig() {
    return this._mysqlConfig;
  }
  public putMysqlConfig(value: DbServiceEngineConfigurationMysqlConfig) {
    this._mysqlConfig.internalValue = value;
  }
  public resetMysqlConfig() {
    this._mysqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigInput() {
    return this._mysqlConfig.internalValue;
  }

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new DbServiceEngineConfigurationOracleConfigOutputReference(this, "oracle_config");
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: DbServiceEngineConfigurationOracleConfig) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }

  // post_script_info - computed: false, optional: true, required: false
  private _postScriptInfo = new DbServiceEngineConfigurationPostScriptInfoOutputReference(this, "post_script_info");
  public get postScriptInfo() {
    return this._postScriptInfo;
  }
  public putPostScriptInfo(value: DbServiceEngineConfigurationPostScriptInfo) {
    this._postScriptInfo.internalValue = value;
  }
  public resetPostScriptInfo() {
    this._postScriptInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScriptInfoInput() {
    return this._postScriptInfo.internalValue;
  }

  // postgresql_config - computed: false, optional: true, required: false
  private _postgresqlConfig = new DbServiceEngineConfigurationPostgresqlConfigOutputReference(this, "postgresql_config");
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }
  public putPostgresqlConfig(value: DbServiceEngineConfigurationPostgresqlConfig) {
    this._postgresqlConfig.internalValue = value;
  }
  public resetPostgresqlConfig() {
    this._postgresqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConfigInput() {
    return this._postgresqlConfig.internalValue;
  }

  // pre_script_info - computed: false, optional: true, required: false
  private _preScriptInfo = new DbServiceEngineConfigurationPreScriptInfoOutputReference(this, "pre_script_info");
  public get preScriptInfo() {
    return this._preScriptInfo;
  }
  public putPreScriptInfo(value: DbServiceEngineConfigurationPreScriptInfo) {
    this._preScriptInfo.internalValue = value;
  }
  public resetPreScriptInfo() {
    this._preScriptInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preScriptInfoInput() {
    return this._preScriptInfo.internalValue;
  }

  // sql_server_config - computed: false, optional: true, required: false
  private _sqlServerConfig = new DbServiceEngineConfigurationSqlServerConfigOutputReference(this, "sql_server_config");
  public get sqlServerConfig() {
    return this._sqlServerConfig;
  }
  public putSqlServerConfig(value: DbServiceEngineConfigurationSqlServerConfig) {
    this._sqlServerConfig.internalValue = value;
  }
  public resetSqlServerConfig() {
    this._sqlServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerConfigInput() {
    return this._sqlServerConfig.internalValue;
  }
}
export interface DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig {
}

export function dbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
}

export class DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureArchiveStorageConfig {
}

export function dbServiceInfrastructureArchiveStorageConfigToTerraform(struct?: DbServiceInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureArchiveStorageConfigToHclTerraform(struct?: DbServiceInfrastructureArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DbServiceInfrastructureArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DbServiceInfrastructureArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureArchiveStorageConfigOutputReference {
    return new DbServiceInfrastructureArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureCloudAvailabilityRegions {
}

export function dbServiceInfrastructureCloudAvailabilityRegionsToTerraform(struct?: DbServiceInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureCloudAvailabilityRegionsToHclTerraform(struct?: DbServiceInfrastructureCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureCloudAvailabilityRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DbServiceInfrastructureCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureCloudAvailabilityRegionsOutputReference {
    return new DbServiceInfrastructureCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureCloudAvailability {
}

export function dbServiceInfrastructureCloudAvailabilityToTerraform(struct?: DbServiceInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureCloudAvailabilityToHclTerraform(struct?: DbServiceInfrastructureCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureCloudAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DbServiceInfrastructureCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DbServiceInfrastructureCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureCloudAvailabilityOutputReference {
    return new DbServiceInfrastructureCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureStorageConfigAzureNetAppConfig {
}

export function dbServiceInfrastructureStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
}

export class DbServiceInfrastructureStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference {
    return new DbServiceInfrastructureStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureStorageConfig {
}

export function dbServiceInfrastructureStorageConfigToTerraform(struct?: DbServiceInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInfrastructureStorageConfigToHclTerraform(struct?: DbServiceInfrastructureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInfrastructureStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInfrastructureStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DbServiceInfrastructureStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DbServiceInfrastructureStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInfrastructureStorageConfigOutputReference {
    return new DbServiceInfrastructureStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructureAwsInfraConfigAwsCpuOptions {
  /**
  * Number of vcpus for aws cpu options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vcpus DbService#vcpus}
  */
  readonly vcpus?: number;
}

export function dbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference | DbServiceInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function dbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference | DbServiceInfrastructureAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureAwsInfraConfigAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vcpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vcpus = value.vcpus;
    }
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}
export interface DbServiceInfrastructureAwsInfraConfig {
  /**
  * aws_cpu_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#aws_cpu_options DbService#aws_cpu_options}
  */
  readonly awsCpuOptions?: DbServiceInfrastructureAwsInfraConfigAwsCpuOptions;
}

export function dbServiceInfrastructureAwsInfraConfigToTerraform(struct?: DbServiceInfrastructureAwsInfraConfigOutputReference | DbServiceInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cpu_options: dbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToTerraform(struct!.awsCpuOptions),
  }
}


export function dbServiceInfrastructureAwsInfraConfigToHclTerraform(struct?: DbServiceInfrastructureAwsInfraConfigOutputReference | DbServiceInfrastructureAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cpu_options: {
      value: dbServiceInfrastructureAwsInfraConfigAwsCpuOptionsToHclTerraform(struct!.awsCpuOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureAwsInfraConfigAwsCpuOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureAwsInfraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCpuOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCpuOptions = this._awsCpuOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCpuOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCpuOptions.internalValue = value.awsCpuOptions;
    }
  }

  // aws_cpu_options - computed: false, optional: true, required: false
  private _awsCpuOptions = new DbServiceInfrastructureAwsInfraConfigAwsCpuOptionsOutputReference(this, "aws_cpu_options");
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
  public putAwsCpuOptions(value: DbServiceInfrastructureAwsInfraConfigAwsCpuOptions) {
    this._awsCpuOptions.internalValue = value;
  }
  public resetAwsCpuOptions() {
    this._awsCpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCpuOptionsInput() {
    return this._awsCpuOptions.internalValue;
  }
}
export interface DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#network_features DbService#network_features}
  */
  readonly networkFeatures?: string;
}

export function dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_features: cdktf.stringToTerraform(struct!.networkFeatures),
  }
}


export function dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_features: {
      value: cdktf.stringToHclTerraform(struct!.networkFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFeatures = this._networkFeatures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFeatures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFeatures = value.networkFeatures;
    }
  }

  // network_features - computed: false, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }
}
export interface DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig {
  /**
  * Azure NetApp Id registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_id DbService#azure_net_app_id}
  */
  readonly azureNetAppId?: string;
  /**
  * Capacity pool Id of the Azure NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_id DbService#capacity_pool_id}
  */
  readonly capacityPoolId?: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#configurations DbService#configurations}
  */
  readonly configurations?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations;
}

export function dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_net_app_id: cdktf.stringToTerraform(struct!.azureNetAppId),
    capacity_pool_id: cdktf.stringToTerraform(struct!.capacityPoolId),
    configurations: dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct!.configurations),
  }
}


export function dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_net_app_id: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureNetAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppId = this._azureNetAppId;
    }
    if (this._capacityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolId = this._capacityPoolId;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureNetAppId = undefined;
      this._capacityPoolId = undefined;
      this._configurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureNetAppId = value.azureNetAppId;
      this._capacityPoolId = value.capacityPoolId;
      this._configurations.internalValue = value.configurations;
    }
  }

  // azure_net_app_id - computed: false, optional: true, required: false
  private _azureNetAppId?: string; 
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }
  public set azureNetAppId(value: string) {
    this._azureNetAppId = value;
  }
  public resetAzureNetAppId() {
    this._azureNetAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppIdInput() {
    return this._azureNetAppId;
  }

  // capacity_pool_id - computed: false, optional: true, required: false
  private _capacityPoolId?: string; 
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }
  public set capacityPoolId(value: string) {
    this._capacityPoolId = value;
  }
  public resetCapacityPoolId() {
    this._capacityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolIdInput() {
    return this._capacityPoolId;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurationsOutputReference(this, "configurations");
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigConfigurations) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}
export interface DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig {
  /**
  * File System Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_id DbService#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Storage Virtual Machine Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_id DbService#svm_id}
  */
  readonly svmId: string;
}

export function dbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    svm_id: cdktf.stringToTerraform(struct!.svmId),
  }
}


export function dbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_id: {
      value: cdktf.stringToHclTerraform(struct!.svmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._svmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmId = this._svmId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._svmId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._svmId = value.svmId;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // svm_id - computed: false, optional: false, required: true
  private _svmId?: string; 
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }
  public set svmId(value: string) {
    this._svmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmIdInput() {
    return this._svmId;
  }
}
export interface DbServiceInfrastructureComputesArchiveStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider: string;
  /**
  * azure_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_config DbService#azure_net_app_config}
  */
  readonly azureNetAppConfig?: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig;
  /**
  * fsx_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#fsx_net_app_config DbService#fsx_net_app_config}
  */
  readonly fsxNetAppConfig?: DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig;
}

export function dbServiceInfrastructureComputesArchiveStorageConfigToTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    azure_net_app_config: dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigToTerraform(struct!.azureNetAppConfig),
    fsx_net_app_config: dbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigToTerraform(struct!.fsxNetAppConfig),
  }
}


export function dbServiceInfrastructureComputesArchiveStorageConfigToHclTerraform(struct?: DbServiceInfrastructureComputesArchiveStorageConfigOutputReference | DbServiceInfrastructureComputesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_config: {
      value: dbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct!.azureNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigList",
    },
    fsx_net_app_config: {
      value: dbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct!.fsxNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._azureNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppConfig = this._azureNetAppConfig?.internalValue;
    }
    if (this._fsxNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxNetAppConfig = this._fsxNetAppConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._azureNetAppConfig.internalValue = undefined;
      this._fsxNetAppConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._azureNetAppConfig.internalValue = value.azureNetAppConfig;
      this._fsxNetAppConfig.internalValue = value.fsxNetAppConfig;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // azure_net_app_config - computed: false, optional: true, required: false
  private _azureNetAppConfig = new DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfigOutputReference(this, "azure_net_app_config");
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }
  public putAzureNetAppConfig(value: DbServiceInfrastructureComputesArchiveStorageConfigAzureNetAppConfig) {
    this._azureNetAppConfig.internalValue = value;
  }
  public resetAzureNetAppConfig() {
    this._azureNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppConfigInput() {
    return this._azureNetAppConfig.internalValue;
  }

  // fsx_net_app_config - computed: false, optional: true, required: false
  private _fsxNetAppConfig = new DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfigOutputReference(this, "fsx_net_app_config");
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }
  public putFsxNetAppConfig(value: DbServiceInfrastructureComputesArchiveStorageConfigFsxNetAppConfig) {
    this._fsxNetAppConfig.internalValue = value;
  }
  public resetFsxNetAppConfig() {
    this._fsxNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxNetAppConfigInput() {
    return this._fsxNetAppConfig.internalValue;
  }
}
export interface DbServiceInfrastructureComputesComputeConfigExadataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_id DbService#compute_id}
  */
  readonly computeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#infrastructure_id DbService#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vm_cluster_id DbService#vm_cluster_id}
  */
  readonly vmClusterId: string;
}

export function dbServiceInfrastructureComputesComputeConfigExadataConfigToTerraform(struct?: DbServiceInfrastructureComputesComputeConfigExadataConfigOutputReference | DbServiceInfrastructureComputesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    infrastructure_id: cdktf.stringToTerraform(struct!.infrastructureId),
    vm_cluster_id: cdktf.stringToTerraform(struct!.vmClusterId),
  }
}


export function dbServiceInfrastructureComputesComputeConfigExadataConfigToHclTerraform(struct?: DbServiceInfrastructureComputesComputeConfigExadataConfigOutputReference | DbServiceInfrastructureComputesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_id: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._infrastructureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureId = this._infrastructureId;
    }
    if (this._vmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterId = this._vmClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesComputeConfigExadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeId = undefined;
      this._infrastructureId = undefined;
      this._vmClusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeId = value.computeId;
      this._infrastructureId = value.infrastructureId;
      this._vmClusterId = value.vmClusterId;
    }
  }

  // compute_id - computed: false, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }
}
export interface DbServiceInfrastructureComputesComputeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider: string;
  /**
  * exadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#exadata_config DbService#exadata_config}
  */
  readonly exadataConfig?: DbServiceInfrastructureComputesComputeConfigExadataConfig;
}

export function dbServiceInfrastructureComputesComputeConfigToTerraform(struct?: DbServiceInfrastructureComputesComputeConfigOutputReference | DbServiceInfrastructureComputesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    exadata_config: dbServiceInfrastructureComputesComputeConfigExadataConfigToTerraform(struct!.exadataConfig),
  }
}


export function dbServiceInfrastructureComputesComputeConfigToHclTerraform(struct?: DbServiceInfrastructureComputesComputeConfigOutputReference | DbServiceInfrastructureComputesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exadata_config: {
      value: dbServiceInfrastructureComputesComputeConfigExadataConfigToHclTerraform(struct!.exadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesComputeConfigExadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesComputeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._exadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exadataConfig = this._exadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._exadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._exadataConfig.internalValue = value.exadataConfig;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // exadata_config - computed: false, optional: true, required: false
  private _exadataConfig = new DbServiceInfrastructureComputesComputeConfigExadataConfigOutputReference(this, "exadata_config");
  public get exadataConfig() {
    return this._exadataConfig;
  }
  public putExadataConfig(value: DbServiceInfrastructureComputesComputeConfigExadataConfig) {
    this._exadataConfig.internalValue = value;
  }
  public resetExadataConfig() {
    this._exadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataConfigInput() {
    return this._exadataConfig.internalValue;
  }
}
export interface DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#network_features DbService#network_features}
  */
  readonly networkFeatures?: string;
}

export function dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsOutputReference | DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_features: cdktf.stringToTerraform(struct!.networkFeatures),
  }
}


export function dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsOutputReference | DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_features: {
      value: cdktf.stringToHclTerraform(struct!.networkFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFeatures = this._networkFeatures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFeatures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFeatures = value.networkFeatures;
    }
  }

  // network_features - computed: false, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }
}
export interface DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig {
  /**
  * Azure NetApp Id registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_id DbService#azure_net_app_id}
  */
  readonly azureNetAppId?: string;
  /**
  * Capacity pool Id of the Azure NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_id DbService#capacity_pool_id}
  */
  readonly capacityPoolId?: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#configurations DbService#configurations}
  */
  readonly configurations?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations;
}

export function dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigOutputReference | DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_net_app_id: cdktf.stringToTerraform(struct!.azureNetAppId),
    capacity_pool_id: cdktf.stringToTerraform(struct!.capacityPoolId),
    configurations: dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct!.configurations),
  }
}


export function dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigOutputReference | DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_net_app_id: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureNetAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppId = this._azureNetAppId;
    }
    if (this._capacityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolId = this._capacityPoolId;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureNetAppId = undefined;
      this._capacityPoolId = undefined;
      this._configurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureNetAppId = value.azureNetAppId;
      this._capacityPoolId = value.capacityPoolId;
      this._configurations.internalValue = value.configurations;
    }
  }

  // azure_net_app_id - computed: false, optional: true, required: false
  private _azureNetAppId?: string; 
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }
  public set azureNetAppId(value: string) {
    this._azureNetAppId = value;
  }
  public resetAzureNetAppId() {
    this._azureNetAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppIdInput() {
    return this._azureNetAppId;
  }

  // capacity_pool_id - computed: false, optional: true, required: false
  private _capacityPoolId?: string; 
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }
  public set capacityPoolId(value: string) {
    this._capacityPoolId = value;
  }
  public resetCapacityPoolId() {
    this._capacityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolIdInput() {
    return this._capacityPoolId;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurationsOutputReference(this, "configurations");
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigConfigurations) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}
export interface DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig {
  /**
  * File System Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_id DbService#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Storage Virtual Machine Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_id DbService#svm_id}
  */
  readonly svmId: string;
}

export function dbServiceInfrastructureComputesStorageConfigFsxNetAppConfigToTerraform(struct?: DbServiceInfrastructureComputesStorageConfigFsxNetAppConfigOutputReference | DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    svm_id: cdktf.stringToTerraform(struct!.svmId),
  }
}


export function dbServiceInfrastructureComputesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DbServiceInfrastructureComputesStorageConfigFsxNetAppConfigOutputReference | DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_id: {
      value: cdktf.stringToHclTerraform(struct!.svmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._svmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmId = this._svmId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._svmId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._svmId = value.svmId;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // svm_id - computed: false, optional: false, required: true
  private _svmId?: string; 
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }
  public set svmId(value: string) {
    this._svmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmIdInput() {
    return this._svmId;
  }
}
export interface DbServiceInfrastructureComputesStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider: string;
  /**
  * azure_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_config DbService#azure_net_app_config}
  */
  readonly azureNetAppConfig?: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig;
  /**
  * fsx_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#fsx_net_app_config DbService#fsx_net_app_config}
  */
  readonly fsxNetAppConfig?: DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig;
}

export function dbServiceInfrastructureComputesStorageConfigToTerraform(struct?: DbServiceInfrastructureComputesStorageConfigOutputReference | DbServiceInfrastructureComputesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    azure_net_app_config: dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigToTerraform(struct!.azureNetAppConfig),
    fsx_net_app_config: dbServiceInfrastructureComputesStorageConfigFsxNetAppConfigToTerraform(struct!.fsxNetAppConfig),
  }
}


export function dbServiceInfrastructureComputesStorageConfigToHclTerraform(struct?: DbServiceInfrastructureComputesStorageConfigOutputReference | DbServiceInfrastructureComputesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_config: {
      value: dbServiceInfrastructureComputesStorageConfigAzureNetAppConfigToHclTerraform(struct!.azureNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigList",
    },
    fsx_net_app_config: {
      value: dbServiceInfrastructureComputesStorageConfigFsxNetAppConfigToHclTerraform(struct!.fsxNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesStorageConfigFsxNetAppConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructureComputesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._azureNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppConfig = this._azureNetAppConfig?.internalValue;
    }
    if (this._fsxNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxNetAppConfig = this._fsxNetAppConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._azureNetAppConfig.internalValue = undefined;
      this._fsxNetAppConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._azureNetAppConfig.internalValue = value.azureNetAppConfig;
      this._fsxNetAppConfig.internalValue = value.fsxNetAppConfig;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // azure_net_app_config - computed: false, optional: true, required: false
  private _azureNetAppConfig = new DbServiceInfrastructureComputesStorageConfigAzureNetAppConfigOutputReference(this, "azure_net_app_config");
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }
  public putAzureNetAppConfig(value: DbServiceInfrastructureComputesStorageConfigAzureNetAppConfig) {
    this._azureNetAppConfig.internalValue = value;
  }
  public resetAzureNetAppConfig() {
    this._azureNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppConfigInput() {
    return this._azureNetAppConfig.internalValue;
  }

  // fsx_net_app_config - computed: false, optional: true, required: false
  private _fsxNetAppConfig = new DbServiceInfrastructureComputesStorageConfigFsxNetAppConfigOutputReference(this, "fsx_net_app_config");
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }
  public putFsxNetAppConfig(value: DbServiceInfrastructureComputesStorageConfigFsxNetAppConfig) {
    this._fsxNetAppConfig.internalValue = value;
  }
  public resetFsxNetAppConfig() {
    this._fsxNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxNetAppConfigInput() {
    return this._fsxNetAppConfig.internalValue;
  }
}
export interface DbServiceInfrastructureComputes {
  /**
  * The availability-zone in which the compute is to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#availability_zone DbService#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Specify the compute resource if it has to be shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_id DbService#compute_id}
  */
  readonly computeId?: string;
  /**
  * The compute-name of instance provided by the User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_name DbService#compute_name}
  */
  readonly computeName?: string;
  /**
  * The compute-type to be used for provisioning the compute resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_type DbService#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#instance_group_name DbService#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name?: string;
  /**
  * The private subnet to be used for provisioning the compute resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#private_subnet DbService#private_subnet}
  */
  readonly privateSubnet?: string;
  /**
  * The region in which the compute is to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#region DbService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#role DbService#role}
  */
  readonly role?: string;
  /**
  * The timezone detail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#timezone DbService#timezone}
  */
  readonly timezone?: string;
  /**
  * The VPC to be used for provisioning the compute resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vpc DbService#vpc}
  */
  readonly vpc?: string;
  /**
  * archive_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#archive_storage_config DbService#archive_storage_config}
  */
  readonly archiveStorageConfig?: DbServiceInfrastructureComputesArchiveStorageConfig;
  /**
  * compute_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_config DbService#compute_config}
  */
  readonly computeConfig?: DbServiceInfrastructureComputesComputeConfig;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#storage_config DbService#storage_config}
  */
  readonly storageConfig?: DbServiceInfrastructureComputesStorageConfig;
}

export function dbServiceInfrastructureComputesToTerraform(struct?: DbServiceInfrastructureComputes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    compute_name: cdktf.stringToTerraform(struct!.computeName),
    compute_type: cdktf.stringToTerraform(struct!.computeType),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    name: cdktf.stringToTerraform(struct!.name),
    private_subnet: cdktf.stringToTerraform(struct!.privateSubnet),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    archive_storage_config: dbServiceInfrastructureComputesArchiveStorageConfigToTerraform(struct!.archiveStorageConfig),
    compute_config: dbServiceInfrastructureComputesComputeConfigToTerraform(struct!.computeConfig),
    storage_config: dbServiceInfrastructureComputesStorageConfigToTerraform(struct!.storageConfig),
  }
}


export function dbServiceInfrastructureComputesToHclTerraform(struct?: DbServiceInfrastructureComputes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_name: {
      value: cdktf.stringToHclTerraform(struct!.computeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_type: {
      value: cdktf.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_subnet: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_storage_config: {
      value: dbServiceInfrastructureComputesArchiveStorageConfigToHclTerraform(struct!.archiveStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesArchiveStorageConfigList",
    },
    compute_config: {
      value: dbServiceInfrastructureComputesComputeConfigToHclTerraform(struct!.computeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesComputeConfigList",
    },
    storage_config: {
      value: dbServiceInfrastructureComputesStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureComputesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInfrastructureComputes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._computeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeName = this._computeName;
    }
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnet = this._privateSubnet;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._archiveStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveStorageConfig = this._archiveStorageConfig?.internalValue;
    }
    if (this._computeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeConfig = this._computeConfig?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructureComputes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._computeId = undefined;
      this._computeName = undefined;
      this._computeType = undefined;
      this._instanceGroupName = undefined;
      this._name = undefined;
      this._privateSubnet = undefined;
      this._region = undefined;
      this._role = undefined;
      this._timezone = undefined;
      this._vpc = undefined;
      this._archiveStorageConfig.internalValue = undefined;
      this._computeConfig.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._computeId = value.computeId;
      this._computeName = value.computeName;
      this._computeType = value.computeType;
      this._instanceGroupName = value.instanceGroupName;
      this._name = value.name;
      this._privateSubnet = value.privateSubnet;
      this._region = value.region;
      this._role = value.role;
      this._timezone = value.timezone;
      this._vpc = value.vpc;
      this._archiveStorageConfig.internalValue = value.archiveStorageConfig;
      this._computeConfig.internalValue = value.computeConfig;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // compute_id - computed: false, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // compute_name - computed: false, optional: true, required: false
  private _computeName?: string; 
  public get computeName() {
    return this.getStringAttribute('compute_name');
  }
  public set computeName(value: string) {
    this._computeName = value;
  }
  public resetComputeName() {
    this._computeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNameInput() {
    return this._computeName;
  }

  // compute_type - computed: false, optional: true, required: false
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // instance_group_name - computed: false, optional: true, required: false
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  public resetInstanceGroupName() {
    this._instanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_subnet - computed: false, optional: true, required: false
  private _privateSubnet?: string; 
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }
  public set privateSubnet(value: string) {
    this._privateSubnet = value;
  }
  public resetPrivateSubnet() {
    this._privateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetInput() {
    return this._privateSubnet;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // archive_storage_config - computed: false, optional: true, required: false
  private _archiveStorageConfig = new DbServiceInfrastructureComputesArchiveStorageConfigOutputReference(this, "archive_storage_config");
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }
  public putArchiveStorageConfig(value: DbServiceInfrastructureComputesArchiveStorageConfig) {
    this._archiveStorageConfig.internalValue = value;
  }
  public resetArchiveStorageConfig() {
    this._archiveStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveStorageConfigInput() {
    return this._archiveStorageConfig.internalValue;
  }

  // compute_config - computed: false, optional: true, required: false
  private _computeConfig = new DbServiceInfrastructureComputesComputeConfigOutputReference(this, "compute_config");
  public get computeConfig() {
    return this._computeConfig;
  }
  public putComputeConfig(value: DbServiceInfrastructureComputesComputeConfig) {
    this._computeConfig.internalValue = value;
  }
  public resetComputeConfig() {
    this._computeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigInput() {
    return this._computeConfig.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new DbServiceInfrastructureComputesStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DbServiceInfrastructureComputesStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}

export class DbServiceInfrastructureComputesList extends cdktf.ComplexList {
  public internalValue? : DbServiceInfrastructureComputes[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInfrastructureComputesOutputReference {
    return new DbServiceInfrastructureComputesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInfrastructure {
  /**
  * Storage in bytes that is over and above the storage included with compute. This is maintained for backward compatibility and would be deprecated soon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#additional_storage DbService#additional_storage}
  */
  readonly additionalStorage?: number;
  /**
  * The availability-zone in which the DB Service is provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#availability_zone DbService#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The cloud-type in which the DB Service is provisioned (ex. aws, azure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#cloud DbService#cloud}
  */
  readonly cloud?: string;
  /**
  * If not specified, it will be autogenerated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_name_prefix DbService#compute_name_prefix}
  */
  readonly computeNamePrefix?: string;
  /**
  * The compute-type to be used for provisioning the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_type DbService#compute_type}
  */
  readonly computeType?: string;
  /**
  * Specify if the computes should be shared across DB Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_compute_sharing DbService#enable_compute_sharing}
  */
  readonly enableComputeSharing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_encryption DbService#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * The encryption key name which is used to encrypt the data at rest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#encryption_key DbService#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * IOPS requested for the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#iops DbService#iops}
  */
  readonly iops?: number;
  /**
  * The private subnet to be used for provisioning the compute resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#private_subnet DbService#private_subnet}
  */
  readonly privateSubnet?: string;
  /**
  * The region in which the DB Service provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#region DbService#region}
  */
  readonly region?: string;
  /**
  * throughput requested for the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#throughput DbService#throughput}
  */
  readonly throughput?: number;
  /**
  * The timezone detail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#timezone DbService#timezone}
  */
  readonly timezone?: string;
  /**
  * The VPC to be used for provisioning the DB Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vpc DbService#vpc}
  */
  readonly vpc?: string;
  /**
  * aws_infra_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#aws_infra_config DbService#aws_infra_config}
  */
  readonly awsInfraConfig?: DbServiceInfrastructureAwsInfraConfig;
  /**
  * computes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#computes DbService#computes}
  */
  readonly computes?: DbServiceInfrastructureComputes[] | cdktf.IResolvable;
}

export function dbServiceInfrastructureToTerraform(struct?: DbServiceInfrastructureOutputReference | DbServiceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_storage: cdktf.numberToTerraform(struct!.additionalStorage),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    compute_name_prefix: cdktf.stringToTerraform(struct!.computeNamePrefix),
    compute_type: cdktf.stringToTerraform(struct!.computeType),
    enable_compute_sharing: cdktf.booleanToTerraform(struct!.enableComputeSharing),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    iops: cdktf.numberToTerraform(struct!.iops),
    private_subnet: cdktf.stringToTerraform(struct!.privateSubnet),
    region: cdktf.stringToTerraform(struct!.region),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    aws_infra_config: dbServiceInfrastructureAwsInfraConfigToTerraform(struct!.awsInfraConfig),
    computes: cdktf.listMapper(dbServiceInfrastructureComputesToTerraform, true)(struct!.computes),
  }
}


export function dbServiceInfrastructureToHclTerraform(struct?: DbServiceInfrastructureOutputReference | DbServiceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_storage: {
      value: cdktf.numberToHclTerraform(struct!.additionalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.computeNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_type: {
      value: cdktf.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_compute_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.enableComputeSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_subnet: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_infra_config: {
      value: dbServiceInfrastructureAwsInfraConfigToHclTerraform(struct!.awsInfraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureAwsInfraConfigList",
    },
    computes: {
      value: cdktf.listMapperHcl(dbServiceInfrastructureComputesToHclTerraform, true)(struct!.computes),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInfrastructureComputesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStorage = this._additionalStorage;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._computeNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeNamePrefix = this._computeNamePrefix;
    }
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._enableComputeSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComputeSharing = this._enableComputeSharing;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._privateSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnet = this._privateSubnet;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._awsInfraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsInfraConfig = this._awsInfraConfig?.internalValue;
    }
    if (this._computes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computes = this._computes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInfrastructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalStorage = undefined;
      this._availabilityZone = undefined;
      this._cloud = undefined;
      this._computeNamePrefix = undefined;
      this._computeType = undefined;
      this._enableComputeSharing = undefined;
      this._enableEncryption = undefined;
      this._encryptionKey = undefined;
      this._iops = undefined;
      this._privateSubnet = undefined;
      this._region = undefined;
      this._throughput = undefined;
      this._timezone = undefined;
      this._vpc = undefined;
      this._awsInfraConfig.internalValue = undefined;
      this._computes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalStorage = value.additionalStorage;
      this._availabilityZone = value.availabilityZone;
      this._cloud = value.cloud;
      this._computeNamePrefix = value.computeNamePrefix;
      this._computeType = value.computeType;
      this._enableComputeSharing = value.enableComputeSharing;
      this._enableEncryption = value.enableEncryption;
      this._encryptionKey = value.encryptionKey;
      this._iops = value.iops;
      this._privateSubnet = value.privateSubnet;
      this._region = value.region;
      this._throughput = value.throughput;
      this._timezone = value.timezone;
      this._vpc = value.vpc;
      this._awsInfraConfig.internalValue = value.awsInfraConfig;
      this._computes.internalValue = value.computes;
    }
  }

  // additional_storage - computed: false, optional: true, required: false
  private _additionalStorage?: number; 
  public get additionalStorage() {
    return this.getNumberAttribute('additional_storage');
  }
  public set additionalStorage(value: number) {
    this._additionalStorage = value;
  }
  public resetAdditionalStorage() {
    this._additionalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStorageInput() {
    return this._additionalStorage;
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DbServiceInfrastructureArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DbServiceInfrastructureCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // compute_name_prefix - computed: false, optional: true, required: false
  private _computeNamePrefix?: string; 
  public get computeNamePrefix() {
    return this.getStringAttribute('compute_name_prefix');
  }
  public set computeNamePrefix(value: string) {
    this._computeNamePrefix = value;
  }
  public resetComputeNamePrefix() {
    this._computeNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNamePrefixInput() {
    return this._computeNamePrefix;
  }

  // compute_provider - computed: true, optional: false, required: false
  public get computeProvider() {
    return this.getStringAttribute('compute_provider');
  }

  // compute_type - computed: true, optional: true, required: false
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // enable_compute_sharing - computed: false, optional: true, required: false
  private _enableComputeSharing?: boolean | cdktf.IResolvable; 
  public get enableComputeSharing() {
    return this.getBooleanAttribute('enable_compute_sharing');
  }
  public set enableComputeSharing(value: boolean | cdktf.IResolvable) {
    this._enableComputeSharing = value;
  }
  public resetEnableComputeSharing() {
    this._enableComputeSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComputeSharingInput() {
    return this._enableComputeSharing;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // multi_disk - computed: true, optional: false, required: false
  public get multiDisk() {
    return this.getBooleanAttribute('multi_disk');
  }

  // private_subnet - computed: false, optional: true, required: false
  private _privateSubnet?: string; 
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }
  public set privateSubnet(value: string) {
    this._privateSubnet = value;
  }
  public resetPrivateSubnet() {
    this._privateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetInput() {
    return this._privateSubnet;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DbServiceInfrastructureStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // aws_infra_config - computed: false, optional: true, required: false
  private _awsInfraConfig = new DbServiceInfrastructureAwsInfraConfigOutputReference(this, "aws_infra_config");
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }
  public putAwsInfraConfig(value: DbServiceInfrastructureAwsInfraConfig) {
    this._awsInfraConfig.internalValue = value;
  }
  public resetAwsInfraConfig() {
    this._awsInfraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInfraConfigInput() {
    return this._awsInfraConfig.internalValue;
  }

  // computes - computed: false, optional: true, required: false
  private _computes = new DbServiceInfrastructureComputesList(this, "computes", false);
  public get computes() {
    return this._computes;
  }
  public putComputes(value: DbServiceInfrastructureComputes[] | cdktf.IResolvable) {
    this._computes.internalValue = value;
  }
  public resetComputes() {
    this._computes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computesInput() {
    return this._computes.internalValue;
  }
}
export interface DbServiceInstancesConnectString {
}

export function dbServiceInstancesConnectStringToTerraform(struct?: DbServiceInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesConnectStringToHclTerraform(struct?: DbServiceInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesConnectString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}

export class DbServiceInstancesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesConnectStringOutputReference {
    return new DbServiceInstancesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesMonitoringConfigPerfInsights {
}

export function dbServiceInstancesMonitoringConfigPerfInsightsToTerraform(struct?: DbServiceInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesMonitoringConfigPerfInsightsToHclTerraform(struct?: DbServiceInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesMonitoringConfigPerfInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesMonitoringConfigPerfInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesMonitoringConfigPerfInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitoring_deployment_id - computed: true, optional: false, required: false
  public get monitoringDeploymentId() {
    return this.getStringAttribute('monitoring_deployment_id');
  }

  // perf_insights_enabled - computed: true, optional: false, required: false
  public get perfInsightsEnabled() {
    return this.getBooleanAttribute('perf_insights_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DbServiceInstancesMonitoringConfigPerfInsightsList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesMonitoringConfigPerfInsightsOutputReference {
    return new DbServiceInstancesMonitoringConfigPerfInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesMonitoringConfig {
}

export function dbServiceInstancesMonitoringConfigToTerraform(struct?: DbServiceInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesMonitoringConfigToHclTerraform(struct?: DbServiceInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // perf_insights - computed: true, optional: false, required: false
  private _perfInsights = new DbServiceInstancesMonitoringConfigPerfInsightsList(this, "perf_insights", false);
  public get perfInsights() {
    return this._perfInsights;
  }
}

export class DbServiceInstancesMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesMonitoringConfigOutputReference {
    return new DbServiceInstancesMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesOptionProfile {
}

export function dbServiceInstancesOptionProfileToTerraform(struct?: DbServiceInstancesOptionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesOptionProfileToHclTerraform(struct?: DbServiceInstancesOptionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesOptionProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesOptionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesOptionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DbServiceInstancesOptionProfileList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesOptionProfileOutputReference {
    return new DbServiceInstancesOptionProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesParameterProfile {
}

export function dbServiceInstancesParameterProfileToTerraform(struct?: DbServiceInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesParameterProfileToHclTerraform(struct?: DbServiceInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesParameterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesParameterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DbServiceInstancesParameterProfileList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesParameterProfileOutputReference {
    return new DbServiceInstancesParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesUpdatesInProgress {
}

export function dbServiceInstancesUpdatesInProgressToTerraform(struct?: DbServiceInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceInstancesUpdatesInProgressToHclTerraform(struct?: DbServiceInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceInstancesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceInstancesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesUpdatesInProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new cdktf.StringMap(this, "update_info");
  public get updateInfo() {
    return this._updateInfo;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DbServiceInstancesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceInstancesUpdatesInProgressOutputReference {
    return new DbServiceInstancesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo {
  /**
  * Id of the encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#id DbService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#key_source DbService#key_source}
  */
  readonly keySource?: string;
  /**
  * name of the encryption key vault in cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#key_vault_cloud_resource_id DbService#key_vault_cloud_resource_id}
  */
  readonly keyVaultCloudResourceId?: string;
  /**
  * name of the encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name?: string;
}

export function dbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference | DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key_source: cdktf.stringToTerraform(struct!.keySource),
    key_vault_cloud_resource_id: cdktf.stringToTerraform(struct!.keyVaultCloudResourceId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference | DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_source: {
      value: cdktf.stringToHclTerraform(struct!.keySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_cloud_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultCloudResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySource = this._keySource;
    }
    if (this._keyVaultCloudResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultCloudResourceId = this._keyVaultCloudResourceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._keySource = undefined;
      this._keyVaultCloudResourceId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._keySource = value.keySource;
      this._keyVaultCloudResourceId = value.keyVaultCloudResourceId;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_source - computed: true, optional: true, required: false
  private _keySource?: string; 
  public get keySource() {
    return this.getStringAttribute('key_source');
  }
  public set keySource(value: string) {
    this._keySource = value;
  }
  public resetKeySource() {
    this._keySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySourceInput() {
    return this._keySource;
  }

  // key_vault_cloud_resource_id - computed: true, optional: true, required: false
  private _keyVaultCloudResourceId?: string; 
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }
  public set keyVaultCloudResourceId(value: string) {
    this._keyVaultCloudResourceId = value;
  }
  public resetKeyVaultCloudResourceId() {
    this._keyVaultCloudResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCloudResourceIdInput() {
    return this._keyVaultCloudResourceId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DbServiceInstancesArchiveStorageConfigAzureNetAppConfig {
  /**
  * Azure NetApp Id registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_id DbService#azure_net_app_id}
  */
  readonly azureNetAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_name DbService#azure_net_app_name}
  */
  readonly azureNetAppName?: string;
  /**
  * Capacity Pool Id of the Azure NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_id DbService#capacity_pool_id}
  */
  readonly capacityPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_name DbService#capacity_pool_name}
  */
  readonly capacityPoolName?: string;
  /**
  * Delegated Subnet name registered with Tessell for the Azure NetApp volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#delegated_subnet_id DbService#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Delegated Subnet Id registered with Tessell for the Azure NetApp volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#delegated_subnet_name DbService#delegated_subnet_name}
  */
  readonly delegatedSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#network_features DbService#network_features}
  */
  readonly networkFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#service_level DbService#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_name DbService#volume_name}
  */
  readonly volumeName?: string;
  /**
  * encryption_key_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#encryption_key_info DbService#encryption_key_info}
  */
  readonly encryptionKeyInfo?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo;
}

export function dbServiceInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference | DbServiceInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_net_app_id: cdktf.stringToTerraform(struct!.azureNetAppId),
    azure_net_app_name: cdktf.stringToTerraform(struct!.azureNetAppName),
    capacity_pool_id: cdktf.stringToTerraform(struct!.capacityPoolId),
    capacity_pool_name: cdktf.stringToTerraform(struct!.capacityPoolName),
    delegated_subnet_id: cdktf.stringToTerraform(struct!.delegatedSubnetId),
    delegated_subnet_name: cdktf.stringToTerraform(struct!.delegatedSubnetName),
    network_features: cdktf.stringToTerraform(struct!.networkFeatures),
    service_level: cdktf.stringToTerraform(struct!.serviceLevel),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    encryption_key_info: dbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct!.encryptionKeyInfo),
  }
}


export function dbServiceInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference | DbServiceInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_net_app_id: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_name: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.delegatedSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.delegatedSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_features: {
      value: cdktf.stringToHclTerraform(struct!.networkFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_level: {
      value: cdktf.stringToHclTerraform(struct!.serviceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_info: {
      value: dbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct!.encryptionKeyInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureNetAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppId = this._azureNetAppId;
    }
    if (this._azureNetAppName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppName = this._azureNetAppName;
    }
    if (this._capacityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolId = this._capacityPoolId;
    }
    if (this._capacityPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolName = this._capacityPoolName;
    }
    if (this._delegatedSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedSubnetId = this._delegatedSubnetId;
    }
    if (this._delegatedSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedSubnetName = this._delegatedSubnetName;
    }
    if (this._networkFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFeatures = this._networkFeatures;
    }
    if (this._serviceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevel = this._serviceLevel;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._encryptionKeyInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyInfo = this._encryptionKeyInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureNetAppId = undefined;
      this._azureNetAppName = undefined;
      this._capacityPoolId = undefined;
      this._capacityPoolName = undefined;
      this._delegatedSubnetId = undefined;
      this._delegatedSubnetName = undefined;
      this._networkFeatures = undefined;
      this._serviceLevel = undefined;
      this._volumeName = undefined;
      this._encryptionKeyInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureNetAppId = value.azureNetAppId;
      this._azureNetAppName = value.azureNetAppName;
      this._capacityPoolId = value.capacityPoolId;
      this._capacityPoolName = value.capacityPoolName;
      this._delegatedSubnetId = value.delegatedSubnetId;
      this._delegatedSubnetName = value.delegatedSubnetName;
      this._networkFeatures = value.networkFeatures;
      this._serviceLevel = value.serviceLevel;
      this._volumeName = value.volumeName;
      this._encryptionKeyInfo.internalValue = value.encryptionKeyInfo;
    }
  }

  // azure_net_app_id - computed: true, optional: true, required: false
  private _azureNetAppId?: string; 
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }
  public set azureNetAppId(value: string) {
    this._azureNetAppId = value;
  }
  public resetAzureNetAppId() {
    this._azureNetAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppIdInput() {
    return this._azureNetAppId;
  }

  // azure_net_app_name - computed: true, optional: true, required: false
  private _azureNetAppName?: string; 
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }
  public set azureNetAppName(value: string) {
    this._azureNetAppName = value;
  }
  public resetAzureNetAppName() {
    this._azureNetAppName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppNameInput() {
    return this._azureNetAppName;
  }

  // capacity_pool_id - computed: true, optional: true, required: false
  private _capacityPoolId?: string; 
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }
  public set capacityPoolId(value: string) {
    this._capacityPoolId = value;
  }
  public resetCapacityPoolId() {
    this._capacityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolIdInput() {
    return this._capacityPoolId;
  }

  // capacity_pool_name - computed: true, optional: true, required: false
  private _capacityPoolName?: string; 
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }
  public set capacityPoolName(value: string) {
    this._capacityPoolName = value;
  }
  public resetCapacityPoolName() {
    this._capacityPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolNameInput() {
    return this._capacityPoolName;
  }

  // delegated_subnet_id - computed: true, optional: true, required: false
  private _delegatedSubnetId?: string; 
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId;
  }

  // delegated_subnet_name - computed: true, optional: true, required: false
  private _delegatedSubnetName?: string; 
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }
  public set delegatedSubnetName(value: string) {
    this._delegatedSubnetName = value;
  }
  public resetDelegatedSubnetName() {
    this._delegatedSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetNameInput() {
    return this._delegatedSubnetName;
  }

  // network_features - computed: true, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }

  // service_level - computed: true, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // encryption_key_info - computed: false, optional: true, required: false
  private _encryptionKeyInfo = new DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this, "encryption_key_info");
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }
  public putEncryptionKeyInfo(value: DbServiceInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo) {
    this._encryptionKeyInfo.internalValue = value;
  }
  public resetEncryptionKeyInfo() {
    this._encryptionKeyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInfoInput() {
    return this._encryptionKeyInfo.internalValue;
  }
}
export interface DbServiceInstancesArchiveStorageConfigFsxNetAppConfig {
  /**
  * File System Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_id DbService#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_name DbService#file_system_name}
  */
  readonly fileSystemName?: string;
  /**
  * Storage Virtual Machine Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_id DbService#svm_id}
  */
  readonly svmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_name DbService#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_name DbService#volume_name}
  */
  readonly volumeName?: string;
}

export function dbServiceInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference | DbServiceInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_name: cdktf.stringToTerraform(struct!.fileSystemName),
    svm_id: cdktf.stringToTerraform(struct!.svmId),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dbServiceInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference | DbServiceInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_name: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_id: {
      value: cdktf.stringToHclTerraform(struct!.svmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemName = this._fileSystemName;
    }
    if (this._svmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmId = this._svmId;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesArchiveStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._fileSystemName = undefined;
      this._svmId = undefined;
      this._svmName = undefined;
      this._volumeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemName = value.fileSystemName;
      this._svmId = value.svmId;
      this._svmName = value.svmName;
      this._volumeName = value.volumeName;
    }
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_name - computed: true, optional: true, required: false
  private _fileSystemName?: string; 
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  public resetFileSystemName() {
    this._fileSystemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName;
  }

  // svm_id - computed: true, optional: true, required: false
  private _svmId?: string; 
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }
  public set svmId(value: string) {
    this._svmId = value;
  }
  public resetSvmId() {
    this._svmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmIdInput() {
    return this._svmId;
  }

  // svm_name - computed: true, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DbServiceInstancesArchiveStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider?: string;
  /**
  * Data disk volume type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_type DbService#volume_type}
  */
  readonly volumeType?: string;
  /**
  * azure_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_config DbService#azure_net_app_config}
  */
  readonly azureNetAppConfig?: DbServiceInstancesArchiveStorageConfigAzureNetAppConfig;
  /**
  * fsx_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#fsx_net_app_config DbService#fsx_net_app_config}
  */
  readonly fsxNetAppConfig?: DbServiceInstancesArchiveStorageConfigFsxNetAppConfig;
}

export function dbServiceInstancesArchiveStorageConfigToTerraform(struct?: DbServiceInstancesArchiveStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    azure_net_app_config: dbServiceInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct!.azureNetAppConfig),
    fsx_net_app_config: dbServiceInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct!.fsxNetAppConfig),
  }
}


export function dbServiceInstancesArchiveStorageConfigToHclTerraform(struct?: DbServiceInstancesArchiveStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_config: {
      value: dbServiceInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct!.azureNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesArchiveStorageConfigAzureNetAppConfigList",
    },
    fsx_net_app_config: {
      value: dbServiceInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct!.fsxNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesArchiveStorageConfigFsxNetAppConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesArchiveStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._azureNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppConfig = this._azureNetAppConfig?.internalValue;
    }
    if (this._fsxNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxNetAppConfig = this._fsxNetAppConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesArchiveStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._volumeType = undefined;
      this._azureNetAppConfig.internalValue = undefined;
      this._fsxNetAppConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._volumeType = value.volumeType;
      this._azureNetAppConfig.internalValue = value.azureNetAppConfig;
      this._fsxNetAppConfig.internalValue = value.fsxNetAppConfig;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // azure_net_app_config - computed: false, optional: true, required: false
  private _azureNetAppConfig = new DbServiceInstancesArchiveStorageConfigAzureNetAppConfigOutputReference(this, "azure_net_app_config");
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }
  public putAzureNetAppConfig(value: DbServiceInstancesArchiveStorageConfigAzureNetAppConfig) {
    this._azureNetAppConfig.internalValue = value;
  }
  public resetAzureNetAppConfig() {
    this._azureNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppConfigInput() {
    return this._azureNetAppConfig.internalValue;
  }

  // fsx_net_app_config - computed: false, optional: true, required: false
  private _fsxNetAppConfig = new DbServiceInstancesArchiveStorageConfigFsxNetAppConfigOutputReference(this, "fsx_net_app_config");
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }
  public putFsxNetAppConfig(value: DbServiceInstancesArchiveStorageConfigFsxNetAppConfig) {
    this._fsxNetAppConfig.internalValue = value;
  }
  public resetFsxNetAppConfig() {
    this._fsxNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxNetAppConfigInput() {
    return this._fsxNetAppConfig.internalValue;
  }
}

export class DbServiceInstancesArchiveStorageConfigList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesArchiveStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesArchiveStorageConfigOutputReference {
    return new DbServiceInstancesArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesAwsInfraConfigAwsCpuOptions {
  /**
  * Number of vcpus for aws cpu options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vcpus DbService#vcpus}
  */
  readonly vcpus?: number;
}

export function dbServiceInstancesAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DbServiceInstancesAwsInfraConfigAwsCpuOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function dbServiceInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DbServiceInstancesAwsInfraConfigAwsCpuOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesAwsInfraConfigAwsCpuOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesAwsInfraConfigAwsCpuOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vcpus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vcpus = value.vcpus;
    }
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}

export class DbServiceInstancesAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesAwsInfraConfigAwsCpuOptions[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DbServiceInstancesAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesAwsInfraConfig {
  /**
  * aws_cpu_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#aws_cpu_options DbService#aws_cpu_options}
  */
  readonly awsCpuOptions?: DbServiceInstancesAwsInfraConfigAwsCpuOptions[] | cdktf.IResolvable;
}

export function dbServiceInstancesAwsInfraConfigToTerraform(struct?: DbServiceInstancesAwsInfraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cpu_options: cdktf.listMapper(dbServiceInstancesAwsInfraConfigAwsCpuOptionsToTerraform, true)(struct!.awsCpuOptions),
  }
}


export function dbServiceInstancesAwsInfraConfigToHclTerraform(struct?: DbServiceInstancesAwsInfraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cpu_options: {
      value: cdktf.listMapperHcl(dbServiceInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform, true)(struct!.awsCpuOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesAwsInfraConfigAwsCpuOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesAwsInfraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesAwsInfraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCpuOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCpuOptions = this._awsCpuOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesAwsInfraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsCpuOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsCpuOptions.internalValue = value.awsCpuOptions;
    }
  }

  // aws_cpu_options - computed: false, optional: true, required: false
  private _awsCpuOptions = new DbServiceInstancesAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
  public putAwsCpuOptions(value: DbServiceInstancesAwsInfraConfigAwsCpuOptions[] | cdktf.IResolvable) {
    this._awsCpuOptions.internalValue = value;
  }
  public resetAwsCpuOptions() {
    this._awsCpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCpuOptionsInput() {
    return this._awsCpuOptions.internalValue;
  }
}

export class DbServiceInstancesAwsInfraConfigList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesAwsInfraConfig[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesAwsInfraConfigOutputReference {
    return new DbServiceInstancesAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesComputeConfigExadataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#infrastructure_id DbService#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#infrastructure_name DbService#infrastructure_name}
  */
  readonly infrastructureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#memory DbService#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vcpus DbService#vcpus}
  */
  readonly vcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vm_cluster_id DbService#vm_cluster_id}
  */
  readonly vmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vm_cluster_name DbService#vm_cluster_name}
  */
  readonly vmClusterName?: string;
}

export function dbServiceInstancesComputeConfigExadataConfigToTerraform(struct?: DbServiceInstancesComputeConfigExadataConfigOutputReference | DbServiceInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infrastructure_id: cdktf.stringToTerraform(struct!.infrastructureId),
    infrastructure_name: cdktf.stringToTerraform(struct!.infrastructureName),
    memory: cdktf.numberToTerraform(struct!.memory),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
    vm_cluster_id: cdktf.stringToTerraform(struct!.vmClusterId),
    vm_cluster_name: cdktf.stringToTerraform(struct!.vmClusterName),
  }
}


export function dbServiceInstancesComputeConfigExadataConfigToHclTerraform(struct?: DbServiceInstancesComputeConfigExadataConfigOutputReference | DbServiceInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infrastructure_id: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_name: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureId = this._infrastructureId;
    }
    if (this._infrastructureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureName = this._infrastructureName;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    if (this._vmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterId = this._vmClusterId;
    }
    if (this._vmClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterName = this._vmClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesComputeConfigExadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infrastructureId = undefined;
      this._infrastructureName = undefined;
      this._memory = undefined;
      this._vcpus = undefined;
      this._vmClusterId = undefined;
      this._vmClusterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infrastructureId = value.infrastructureId;
      this._infrastructureName = value.infrastructureName;
      this._memory = value.memory;
      this._vcpus = value.vcpus;
      this._vmClusterId = value.vmClusterId;
      this._vmClusterName = value.vmClusterName;
    }
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // infrastructure_name - computed: true, optional: true, required: false
  private _infrastructureName?: string; 
  public get infrastructureName() {
    return this.getStringAttribute('infrastructure_name');
  }
  public set infrastructureName(value: string) {
    this._infrastructureName = value;
  }
  public resetInfrastructureName() {
    this._infrastructureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureNameInput() {
    return this._infrastructureName;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }

  // vm_cluster_name - computed: true, optional: true, required: false
  private _vmClusterName?: string; 
  public get vmClusterName() {
    return this.getStringAttribute('vm_cluster_name');
  }
  public set vmClusterName(value: string) {
    this._vmClusterName = value;
  }
  public resetVmClusterName() {
    this._vmClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterNameInput() {
    return this._vmClusterName;
  }
}
export interface DbServiceInstancesComputeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider?: string;
  /**
  * exadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#exadata_config DbService#exadata_config}
  */
  readonly exadataConfig?: DbServiceInstancesComputeConfigExadataConfig;
}

export function dbServiceInstancesComputeConfigToTerraform(struct?: DbServiceInstancesComputeConfigOutputReference | DbServiceInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    exadata_config: dbServiceInstancesComputeConfigExadataConfigToTerraform(struct!.exadataConfig),
  }
}


export function dbServiceInstancesComputeConfigToHclTerraform(struct?: DbServiceInstancesComputeConfigOutputReference | DbServiceInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exadata_config: {
      value: dbServiceInstancesComputeConfigExadataConfigToHclTerraform(struct!.exadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesComputeConfigExadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesComputeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._exadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exadataConfig = this._exadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._exadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._exadataConfig.internalValue = value.exadataConfig;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // exadata_config - computed: false, optional: true, required: false
  private _exadataConfig = new DbServiceInstancesComputeConfigExadataConfigOutputReference(this, "exadata_config");
  public get exadataConfig() {
    return this._exadataConfig;
  }
  public putExadataConfig(value: DbServiceInstancesComputeConfigExadataConfig) {
    this._exadataConfig.internalValue = value;
  }
  public resetExadataConfig() {
    this._exadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataConfigInput() {
    return this._exadataConfig.internalValue;
  }
}
export interface DbServiceInstancesEngineConfigurationOracleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#access_mode DbService#access_mode}
  */
  readonly accessMode?: string;
}

export function dbServiceInstancesEngineConfigurationOracleConfigToTerraform(struct?: DbServiceInstancesEngineConfigurationOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
  }
}


export function dbServiceInstancesEngineConfigurationOracleConfigToHclTerraform(struct?: DbServiceInstancesEngineConfigurationOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesEngineConfigurationOracleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesEngineConfigurationOracleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }
}

export class DbServiceInstancesEngineConfigurationOracleConfigList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesEngineConfigurationOracleConfig[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesEngineConfigurationOracleConfigOutputReference {
    return new DbServiceInstancesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesEngineConfiguration {
  /**
  * oracle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#oracle_config DbService#oracle_config}
  */
  readonly oracleConfig?: DbServiceInstancesEngineConfigurationOracleConfig[] | cdktf.IResolvable;
}

export function dbServiceInstancesEngineConfigurationToTerraform(struct?: DbServiceInstancesEngineConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_config: cdktf.listMapper(dbServiceInstancesEngineConfigurationOracleConfigToTerraform, true)(struct!.oracleConfig),
  }
}


export function dbServiceInstancesEngineConfigurationToHclTerraform(struct?: DbServiceInstancesEngineConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_config: {
      value: cdktf.listMapperHcl(dbServiceInstancesEngineConfigurationOracleConfigToHclTerraform, true)(struct!.oracleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesEngineConfigurationOracleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesEngineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesEngineConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConfig = this._oracleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesEngineConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oracleConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oracleConfig.internalValue = value.oracleConfig;
    }
  }

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new DbServiceInstancesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: DbServiceInstancesEngineConfigurationOracleConfig[] | cdktf.IResolvable) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }
}

export class DbServiceInstancesEngineConfigurationList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesEngineConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesEngineConfigurationOutputReference {
    return new DbServiceInstancesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesPrivateLinkInfo {
  /**
  * The list of Azure subscription Ids. This is only applicable for DB Services hosted on AZURE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#client_azure_subscription_ids DbService#client_azure_subscription_ids}
  */
  readonly clientAzureSubscriptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#id DbService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Azure private link service alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#private_link_service_alias DbService#private_link_service_alias}
  */
  readonly privateLinkServiceAlias?: string;
  /**
  * The list of AWS account principals that are currently enabled. This is only applicable for DB Services hosted on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#service_principals DbService#service_principals}
  */
  readonly servicePrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#status DbService#status}
  */
  readonly status?: string;
}

export function dbServiceInstancesPrivateLinkInfoToTerraform(struct?: DbServiceInstancesPrivateLinkInfoOutputReference | DbServiceInstancesPrivateLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_azure_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientAzureSubscriptionIds),
    id: cdktf.stringToTerraform(struct!.id),
    private_link_service_alias: cdktf.stringToTerraform(struct!.privateLinkServiceAlias),
    service_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicePrincipals),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dbServiceInstancesPrivateLinkInfoToHclTerraform(struct?: DbServiceInstancesPrivateLinkInfoOutputReference | DbServiceInstancesPrivateLinkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_azure_subscription_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientAzureSubscriptionIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_service_alias: {
      value: cdktf.stringToHclTerraform(struct!.privateLinkServiceAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicePrincipals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesPrivateLinkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesPrivateLinkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAzureSubscriptionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAzureSubscriptionIds = this._clientAzureSubscriptionIds;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._privateLinkServiceAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceAlias = this._privateLinkServiceAlias;
    }
    if (this._servicePrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipals = this._servicePrincipals;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesPrivateLinkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAzureSubscriptionIds = undefined;
      this._id = undefined;
      this._privateLinkServiceAlias = undefined;
      this._servicePrincipals = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAzureSubscriptionIds = value.clientAzureSubscriptionIds;
      this._id = value.id;
      this._privateLinkServiceAlias = value.privateLinkServiceAlias;
      this._servicePrincipals = value.servicePrincipals;
      this._status = value.status;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: true, required: false
  private _clientAzureSubscriptionIds?: string[]; 
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }
  public set clientAzureSubscriptionIds(value: string[]) {
    this._clientAzureSubscriptionIds = value;
  }
  public resetClientAzureSubscriptionIds() {
    this._clientAzureSubscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAzureSubscriptionIdsInput() {
    return this._clientAzureSubscriptionIds;
  }

  // endpoint_service_name - computed: true, optional: false, required: false
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // private_link_service_alias - computed: true, optional: true, required: false
  private _privateLinkServiceAlias?: string; 
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }
  public set privateLinkServiceAlias(value: string) {
    this._privateLinkServiceAlias = value;
  }
  public resetPrivateLinkServiceAlias() {
    this._privateLinkServiceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceAliasInput() {
    return this._privateLinkServiceAlias;
  }

  // service_principals - computed: true, optional: true, required: false
  private _servicePrincipals?: string[]; 
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }
  public set servicePrincipals(value: string[]) {
    this._servicePrincipals = value;
  }
  public resetServicePrincipals() {
    this._servicePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalsInput() {
    return this._servicePrincipals;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo {
  /**
  * Id of the encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#id DbService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#key_source DbService#key_source}
  */
  readonly keySource?: string;
  /**
  * name of the encryption key vault in cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#key_vault_cloud_resource_id DbService#key_vault_cloud_resource_id}
  */
  readonly keyVaultCloudResourceId?: string;
  /**
  * name of the encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name?: string;
}

export function dbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference | DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key_source: cdktf.stringToTerraform(struct!.keySource),
    key_vault_cloud_resource_id: cdktf.stringToTerraform(struct!.keyVaultCloudResourceId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference | DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_source: {
      value: cdktf.stringToHclTerraform(struct!.keySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_cloud_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultCloudResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySource = this._keySource;
    }
    if (this._keyVaultCloudResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultCloudResourceId = this._keyVaultCloudResourceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._keySource = undefined;
      this._keyVaultCloudResourceId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._keySource = value.keySource;
      this._keyVaultCloudResourceId = value.keyVaultCloudResourceId;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_source - computed: true, optional: true, required: false
  private _keySource?: string; 
  public get keySource() {
    return this.getStringAttribute('key_source');
  }
  public set keySource(value: string) {
    this._keySource = value;
  }
  public resetKeySource() {
    this._keySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySourceInput() {
    return this._keySource;
  }

  // key_vault_cloud_resource_id - computed: true, optional: true, required: false
  private _keyVaultCloudResourceId?: string; 
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }
  public set keyVaultCloudResourceId(value: string) {
    this._keyVaultCloudResourceId = value;
  }
  public resetKeyVaultCloudResourceId() {
    this._keyVaultCloudResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCloudResourceIdInput() {
    return this._keyVaultCloudResourceId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DbServiceInstancesStorageConfigAzureNetAppConfig {
  /**
  * Azure NetApp Id registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_id DbService#azure_net_app_id}
  */
  readonly azureNetAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_name DbService#azure_net_app_name}
  */
  readonly azureNetAppName?: string;
  /**
  * Capacity Pool Id of the Azure NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_id DbService#capacity_pool_id}
  */
  readonly capacityPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#capacity_pool_name DbService#capacity_pool_name}
  */
  readonly capacityPoolName?: string;
  /**
  * Delegated Subnet name registered with Tessell for the Azure NetApp volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#delegated_subnet_id DbService#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Delegated Subnet Id registered with Tessell for the Azure NetApp volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#delegated_subnet_name DbService#delegated_subnet_name}
  */
  readonly delegatedSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#network_features DbService#network_features}
  */
  readonly networkFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#service_level DbService#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_name DbService#volume_name}
  */
  readonly volumeName?: string;
  /**
  * encryption_key_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#encryption_key_info DbService#encryption_key_info}
  */
  readonly encryptionKeyInfo?: DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo;
}

export function dbServiceInstancesStorageConfigAzureNetAppConfigToTerraform(struct?: DbServiceInstancesStorageConfigAzureNetAppConfigOutputReference | DbServiceInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_net_app_id: cdktf.stringToTerraform(struct!.azureNetAppId),
    azure_net_app_name: cdktf.stringToTerraform(struct!.azureNetAppName),
    capacity_pool_id: cdktf.stringToTerraform(struct!.capacityPoolId),
    capacity_pool_name: cdktf.stringToTerraform(struct!.capacityPoolName),
    delegated_subnet_id: cdktf.stringToTerraform(struct!.delegatedSubnetId),
    delegated_subnet_name: cdktf.stringToTerraform(struct!.delegatedSubnetName),
    network_features: cdktf.stringToTerraform(struct!.networkFeatures),
    service_level: cdktf.stringToTerraform(struct!.serviceLevel),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    encryption_key_info: dbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct!.encryptionKeyInfo),
  }
}


export function dbServiceInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DbServiceInstancesStorageConfigAzureNetAppConfigOutputReference | DbServiceInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_net_app_id: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_name: {
      value: cdktf.stringToHclTerraform(struct!.azureNetAppName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.delegatedSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.delegatedSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_features: {
      value: cdktf.stringToHclTerraform(struct!.networkFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_level: {
      value: cdktf.stringToHclTerraform(struct!.serviceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_info: {
      value: dbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct!.encryptionKeyInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceInstancesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureNetAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppId = this._azureNetAppId;
    }
    if (this._azureNetAppName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppName = this._azureNetAppName;
    }
    if (this._capacityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolId = this._capacityPoolId;
    }
    if (this._capacityPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolName = this._capacityPoolName;
    }
    if (this._delegatedSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedSubnetId = this._delegatedSubnetId;
    }
    if (this._delegatedSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedSubnetName = this._delegatedSubnetName;
    }
    if (this._networkFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFeatures = this._networkFeatures;
    }
    if (this._serviceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevel = this._serviceLevel;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._encryptionKeyInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyInfo = this._encryptionKeyInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureNetAppId = undefined;
      this._azureNetAppName = undefined;
      this._capacityPoolId = undefined;
      this._capacityPoolName = undefined;
      this._delegatedSubnetId = undefined;
      this._delegatedSubnetName = undefined;
      this._networkFeatures = undefined;
      this._serviceLevel = undefined;
      this._volumeName = undefined;
      this._encryptionKeyInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureNetAppId = value.azureNetAppId;
      this._azureNetAppName = value.azureNetAppName;
      this._capacityPoolId = value.capacityPoolId;
      this._capacityPoolName = value.capacityPoolName;
      this._delegatedSubnetId = value.delegatedSubnetId;
      this._delegatedSubnetName = value.delegatedSubnetName;
      this._networkFeatures = value.networkFeatures;
      this._serviceLevel = value.serviceLevel;
      this._volumeName = value.volumeName;
      this._encryptionKeyInfo.internalValue = value.encryptionKeyInfo;
    }
  }

  // azure_net_app_id - computed: true, optional: true, required: false
  private _azureNetAppId?: string; 
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }
  public set azureNetAppId(value: string) {
    this._azureNetAppId = value;
  }
  public resetAzureNetAppId() {
    this._azureNetAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppIdInput() {
    return this._azureNetAppId;
  }

  // azure_net_app_name - computed: true, optional: true, required: false
  private _azureNetAppName?: string; 
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }
  public set azureNetAppName(value: string) {
    this._azureNetAppName = value;
  }
  public resetAzureNetAppName() {
    this._azureNetAppName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppNameInput() {
    return this._azureNetAppName;
  }

  // capacity_pool_id - computed: true, optional: true, required: false
  private _capacityPoolId?: string; 
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }
  public set capacityPoolId(value: string) {
    this._capacityPoolId = value;
  }
  public resetCapacityPoolId() {
    this._capacityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolIdInput() {
    return this._capacityPoolId;
  }

  // capacity_pool_name - computed: true, optional: true, required: false
  private _capacityPoolName?: string; 
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }
  public set capacityPoolName(value: string) {
    this._capacityPoolName = value;
  }
  public resetCapacityPoolName() {
    this._capacityPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolNameInput() {
    return this._capacityPoolName;
  }

  // delegated_subnet_id - computed: true, optional: true, required: false
  private _delegatedSubnetId?: string; 
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId;
  }

  // delegated_subnet_name - computed: true, optional: true, required: false
  private _delegatedSubnetName?: string; 
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }
  public set delegatedSubnetName(value: string) {
    this._delegatedSubnetName = value;
  }
  public resetDelegatedSubnetName() {
    this._delegatedSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetNameInput() {
    return this._delegatedSubnetName;
  }

  // network_features - computed: true, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }

  // service_level - computed: true, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // encryption_key_info - computed: false, optional: true, required: false
  private _encryptionKeyInfo = new DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this, "encryption_key_info");
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }
  public putEncryptionKeyInfo(value: DbServiceInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo) {
    this._encryptionKeyInfo.internalValue = value;
  }
  public resetEncryptionKeyInfo() {
    this._encryptionKeyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInfoInput() {
    return this._encryptionKeyInfo.internalValue;
  }
}
export interface DbServiceInstancesStorageConfigFsxNetAppConfig {
  /**
  * File System Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_id DbService#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#file_system_name DbService#file_system_name}
  */
  readonly fileSystemName?: string;
  /**
  * Storage Virtual Machine Id of the FSx NetApp registered with Tessell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_id DbService#svm_id}
  */
  readonly svmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#svm_name DbService#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_name DbService#volume_name}
  */
  readonly volumeName?: string;
}

export function dbServiceInstancesStorageConfigFsxNetAppConfigToTerraform(struct?: DbServiceInstancesStorageConfigFsxNetAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_name: cdktf.stringToTerraform(struct!.fileSystemName),
    svm_id: cdktf.stringToTerraform(struct!.svmId),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dbServiceInstancesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DbServiceInstancesStorageConfigFsxNetAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_name: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_id: {
      value: cdktf.stringToHclTerraform(struct!.svmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesStorageConfigFsxNetAppConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemName = this._fileSystemName;
    }
    if (this._svmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmId = this._svmId;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesStorageConfigFsxNetAppConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemName = undefined;
      this._svmId = undefined;
      this._svmName = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemName = value.fileSystemName;
      this._svmId = value.svmId;
      this._svmName = value.svmName;
      this._volumeName = value.volumeName;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_name - computed: false, optional: true, required: false
  private _fileSystemName?: string; 
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  public resetFileSystemName() {
    this._fileSystemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName;
  }

  // svm_id - computed: false, optional: true, required: false
  private _svmId?: string; 
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }
  public set svmId(value: string) {
    this._svmId = value;
  }
  public resetSvmId() {
    this._svmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmIdInput() {
    return this._svmId;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class DbServiceInstancesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesStorageConfigFsxNetAppConfig[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesStorageConfigFsxNetAppConfigOutputReference {
    return new DbServiceInstancesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstancesStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#provider DbService#provider}
  */
  readonly provider?: string;
  /**
  * Data disk volume type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#volume_type DbService#volume_type}
  */
  readonly volumeType?: string;
  /**
  * azure_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#azure_net_app_config DbService#azure_net_app_config}
  */
  readonly azureNetAppConfig?: DbServiceInstancesStorageConfigAzureNetAppConfig;
  /**
  * fsx_net_app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#fsx_net_app_config DbService#fsx_net_app_config}
  */
  readonly fsxNetAppConfig?: DbServiceInstancesStorageConfigFsxNetAppConfig[] | cdktf.IResolvable;
}

export function dbServiceInstancesStorageConfigToTerraform(struct?: DbServiceInstancesStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    azure_net_app_config: dbServiceInstancesStorageConfigAzureNetAppConfigToTerraform(struct!.azureNetAppConfig),
    fsx_net_app_config: cdktf.listMapper(dbServiceInstancesStorageConfigFsxNetAppConfigToTerraform, true)(struct!.fsxNetAppConfig),
  }
}


export function dbServiceInstancesStorageConfigToHclTerraform(struct?: DbServiceInstancesStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_net_app_config: {
      value: dbServiceInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct!.azureNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesStorageConfigAzureNetAppConfigList",
    },
    fsx_net_app_config: {
      value: cdktf.listMapperHcl(dbServiceInstancesStorageConfigFsxNetAppConfigToHclTerraform, true)(struct!.fsxNetAppConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesStorageConfigFsxNetAppConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstancesStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._azureNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureNetAppConfig = this._azureNetAppConfig?.internalValue;
    }
    if (this._fsxNetAppConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxNetAppConfig = this._fsxNetAppConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstancesStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._volumeType = undefined;
      this._azureNetAppConfig.internalValue = undefined;
      this._fsxNetAppConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._volumeType = value.volumeType;
      this._azureNetAppConfig.internalValue = value.azureNetAppConfig;
      this._fsxNetAppConfig.internalValue = value.fsxNetAppConfig;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // azure_net_app_config - computed: false, optional: true, required: false
  private _azureNetAppConfig = new DbServiceInstancesStorageConfigAzureNetAppConfigOutputReference(this, "azure_net_app_config");
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }
  public putAzureNetAppConfig(value: DbServiceInstancesStorageConfigAzureNetAppConfig) {
    this._azureNetAppConfig.internalValue = value;
  }
  public resetAzureNetAppConfig() {
    this._azureNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureNetAppConfigInput() {
    return this._azureNetAppConfig.internalValue;
  }

  // fsx_net_app_config - computed: false, optional: true, required: false
  private _fsxNetAppConfig = new DbServiceInstancesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }
  public putFsxNetAppConfig(value: DbServiceInstancesStorageConfigFsxNetAppConfig[] | cdktf.IResolvable) {
    this._fsxNetAppConfig.internalValue = value;
  }
  public resetFsxNetAppConfig() {
    this._fsxNetAppConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxNetAppConfigInput() {
    return this._fsxNetAppConfig.internalValue;
  }
}

export class DbServiceInstancesStorageConfigList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstancesStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesStorageConfigOutputReference {
    return new DbServiceInstancesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceInstances {
  /**
  * DB Service Instance's cloud availability zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#availability_zone DbService#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The associated compute identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_id DbService#compute_id}
  */
  readonly computeId?: string;
  /**
  * The compute used for creation of the Tessell Service Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_type DbService#compute_type}
  */
  readonly computeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#data_volume_iops DbService#data_volume_iops}
  */
  readonly dataVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_perf_insights DbService#enable_perf_insights}
  */
  readonly enablePerfInsights?: boolean | cdktf.IResolvable;
  /**
  * The encryption key name which is used to encrypt the data at rest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#encryption_key DbService#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Name of the instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#instance_group_name DbService#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Name of the DB Service Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name: string;
  /**
  * The private subnet used for creation of the DB Service Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#private_subnet DbService#private_subnet}
  */
  readonly privateSubnet?: string;
  /**
  * DB Service Instance's cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#region DbService#region}
  */
  readonly region: string;
  /**
  * DB Service instance role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#role DbService#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#sync_mode DbService#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * Throughput requested for this DB Service instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#throughput DbService#throughput}
  */
  readonly throughput?: number;
  /**
  * DB Service instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#type DbService#type}
  */
  readonly type?: string;
  /**
  * The VPC used for creation of the DB Service Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#vpc DbService#vpc}
  */
  readonly vpc: string;
  /**
  * archive_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#archive_storage_config DbService#archive_storage_config}
  */
  readonly archiveStorageConfig?: DbServiceInstancesArchiveStorageConfig[] | cdktf.IResolvable;
  /**
  * aws_infra_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#aws_infra_config DbService#aws_infra_config}
  */
  readonly awsInfraConfig?: DbServiceInstancesAwsInfraConfig[] | cdktf.IResolvable;
  /**
  * compute_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#compute_config DbService#compute_config}
  */
  readonly computeConfig?: DbServiceInstancesComputeConfig;
  /**
  * engine_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#engine_configuration DbService#engine_configuration}
  */
  readonly engineConfiguration?: DbServiceInstancesEngineConfiguration[] | cdktf.IResolvable;
  /**
  * private_link_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#private_link_info DbService#private_link_info}
  */
  readonly privateLinkInfo?: DbServiceInstancesPrivateLinkInfo;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#storage_config DbService#storage_config}
  */
  readonly storageConfig?: DbServiceInstancesStorageConfig[] | cdktf.IResolvable;
}

export function dbServiceInstancesToTerraform(struct?: DbServiceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    compute_type: cdktf.stringToTerraform(struct!.computeType),
    data_volume_iops: cdktf.numberToTerraform(struct!.dataVolumeIops),
    enable_perf_insights: cdktf.booleanToTerraform(struct!.enablePerfInsights),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    name: cdktf.stringToTerraform(struct!.name),
    private_subnet: cdktf.stringToTerraform(struct!.privateSubnet),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    type: cdktf.stringToTerraform(struct!.type),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    archive_storage_config: cdktf.listMapper(dbServiceInstancesArchiveStorageConfigToTerraform, true)(struct!.archiveStorageConfig),
    aws_infra_config: cdktf.listMapper(dbServiceInstancesAwsInfraConfigToTerraform, true)(struct!.awsInfraConfig),
    compute_config: dbServiceInstancesComputeConfigToTerraform(struct!.computeConfig),
    engine_configuration: cdktf.listMapper(dbServiceInstancesEngineConfigurationToTerraform, true)(struct!.engineConfiguration),
    private_link_info: dbServiceInstancesPrivateLinkInfoToTerraform(struct!.privateLinkInfo),
    storage_config: cdktf.listMapper(dbServiceInstancesStorageConfigToTerraform, true)(struct!.storageConfig),
  }
}


export function dbServiceInstancesToHclTerraform(struct?: DbServiceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_type: {
      value: cdktf.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_perf_insights: {
      value: cdktf.booleanToHclTerraform(struct!.enablePerfInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_subnet: {
      value: cdktf.stringToHclTerraform(struct!.privateSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_storage_config: {
      value: cdktf.listMapperHcl(dbServiceInstancesArchiveStorageConfigToHclTerraform, true)(struct!.archiveStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesArchiveStorageConfigList",
    },
    aws_infra_config: {
      value: cdktf.listMapperHcl(dbServiceInstancesAwsInfraConfigToHclTerraform, true)(struct!.awsInfraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesAwsInfraConfigList",
    },
    compute_config: {
      value: dbServiceInstancesComputeConfigToHclTerraform(struct!.computeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesComputeConfigList",
    },
    engine_configuration: {
      value: cdktf.listMapperHcl(dbServiceInstancesEngineConfigurationToHclTerraform, true)(struct!.engineConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesEngineConfigurationList",
    },
    private_link_info: {
      value: dbServiceInstancesPrivateLinkInfoToHclTerraform(struct!.privateLinkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesPrivateLinkInfoList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(dbServiceInstancesStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceInstancesStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._dataVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeIops = this._dataVolumeIops;
    }
    if (this._enablePerfInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerfInsights = this._enablePerfInsights;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnet = this._privateSubnet;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._archiveStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveStorageConfig = this._archiveStorageConfig?.internalValue;
    }
    if (this._awsInfraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsInfraConfig = this._awsInfraConfig?.internalValue;
    }
    if (this._computeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeConfig = this._computeConfig?.internalValue;
    }
    if (this._engineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineConfiguration = this._engineConfiguration?.internalValue;
    }
    if (this._privateLinkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkInfo = this._privateLinkInfo?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._computeId = undefined;
      this._computeType = undefined;
      this._dataVolumeIops = undefined;
      this._enablePerfInsights = undefined;
      this._encryptionKey = undefined;
      this._instanceGroupName = undefined;
      this._name = undefined;
      this._privateSubnet = undefined;
      this._region = undefined;
      this._role = undefined;
      this._syncMode = undefined;
      this._throughput = undefined;
      this._type = undefined;
      this._vpc = undefined;
      this._archiveStorageConfig.internalValue = undefined;
      this._awsInfraConfig.internalValue = undefined;
      this._computeConfig.internalValue = undefined;
      this._engineConfiguration.internalValue = undefined;
      this._privateLinkInfo.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._computeId = value.computeId;
      this._computeType = value.computeType;
      this._dataVolumeIops = value.dataVolumeIops;
      this._enablePerfInsights = value.enablePerfInsights;
      this._encryptionKey = value.encryptionKey;
      this._instanceGroupName = value.instanceGroupName;
      this._name = value.name;
      this._privateSubnet = value.privateSubnet;
      this._region = value.region;
      this._role = value.role;
      this._syncMode = value.syncMode;
      this._throughput = value.throughput;
      this._type = value.type;
      this._vpc = value.vpc;
      this._archiveStorageConfig.internalValue = value.archiveStorageConfig;
      this._awsInfraConfig.internalValue = value.awsInfraConfig;
      this._computeConfig.internalValue = value.computeConfig;
      this._engineConfiguration.internalValue = value.engineConfiguration;
      this._privateLinkInfo.internalValue = value.privateLinkInfo;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // compute_id - computed: true, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // compute_name - computed: true, optional: false, required: false
  public get computeName() {
    return this.getStringAttribute('compute_name');
  }

  // compute_type - computed: true, optional: true, required: false
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  public resetComputeType() {
    this._computeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DbServiceInstancesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // data_volume_iops - computed: true, optional: true, required: false
  private _dataVolumeIops?: number; 
  public get dataVolumeIops() {
    return this.getNumberAttribute('data_volume_iops');
  }
  public set dataVolumeIops(value: number) {
    this._dataVolumeIops = value;
  }
  public resetDataVolumeIops() {
    this._dataVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeIopsInput() {
    return this._dataVolumeIops;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // enable_perf_insights - computed: false, optional: true, required: false
  private _enablePerfInsights?: boolean | cdktf.IResolvable; 
  public get enablePerfInsights() {
    return this.getBooleanAttribute('enable_perf_insights');
  }
  public set enablePerfInsights(value: boolean | cdktf.IResolvable) {
    this._enablePerfInsights = value;
  }
  public resetEnablePerfInsights() {
    this._enablePerfInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerfInsightsInput() {
    return this._enablePerfInsights;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // last_started_at - computed: true, optional: false, required: false
  public get lastStartedAt() {
    return this.getStringAttribute('last_started_at');
  }

  // last_stopped_at - computed: true, optional: false, required: false
  public get lastStoppedAt() {
    return this.getStringAttribute('last_stopped_at');
  }

  // monitoring_config - computed: true, optional: false, required: false
  private _monitoringConfig = new DbServiceInstancesMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // option_profile - computed: true, optional: false, required: false
  private _optionProfile = new DbServiceInstancesOptionProfileList(this, "option_profile", false);
  public get optionProfile() {
    return this._optionProfile;
  }

  // parameter_profile - computed: true, optional: false, required: false
  private _parameterProfile = new DbServiceInstancesParameterProfileList(this, "parameter_profile", false);
  public get parameterProfile() {
    return this._parameterProfile;
  }

  // private_subnet - computed: false, optional: true, required: false
  private _privateSubnet?: string; 
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }
  public set privateSubnet(value: string) {
    this._privateSubnet = value;
  }
  public resetPrivateSubnet() {
    this._privateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetInput() {
    return this._privateSubnet;
  }

  // public_subnet - computed: true, optional: false, required: false
  public get publicSubnet() {
    return this.getStringAttribute('public_subnet');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // software_image_version - computed: true, optional: false, required: false
  public get softwareImageVersion() {
    return this.getStringAttribute('software_image_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DbServiceInstancesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // archive_storage_config - computed: false, optional: true, required: false
  private _archiveStorageConfig = new DbServiceInstancesArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }
  public putArchiveStorageConfig(value: DbServiceInstancesArchiveStorageConfig[] | cdktf.IResolvable) {
    this._archiveStorageConfig.internalValue = value;
  }
  public resetArchiveStorageConfig() {
    this._archiveStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveStorageConfigInput() {
    return this._archiveStorageConfig.internalValue;
  }

  // aws_infra_config - computed: false, optional: true, required: false
  private _awsInfraConfig = new DbServiceInstancesAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }
  public putAwsInfraConfig(value: DbServiceInstancesAwsInfraConfig[] | cdktf.IResolvable) {
    this._awsInfraConfig.internalValue = value;
  }
  public resetAwsInfraConfig() {
    this._awsInfraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInfraConfigInput() {
    return this._awsInfraConfig.internalValue;
  }

  // compute_config - computed: false, optional: true, required: false
  private _computeConfig = new DbServiceInstancesComputeConfigOutputReference(this, "compute_config");
  public get computeConfig() {
    return this._computeConfig;
  }
  public putComputeConfig(value: DbServiceInstancesComputeConfig) {
    this._computeConfig.internalValue = value;
  }
  public resetComputeConfig() {
    this._computeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigInput() {
    return this._computeConfig.internalValue;
  }

  // engine_configuration - computed: false, optional: true, required: false
  private _engineConfiguration = new DbServiceInstancesEngineConfigurationList(this, "engine_configuration", false);
  public get engineConfiguration() {
    return this._engineConfiguration;
  }
  public putEngineConfiguration(value: DbServiceInstancesEngineConfiguration[] | cdktf.IResolvable) {
    this._engineConfiguration.internalValue = value;
  }
  public resetEngineConfiguration() {
    this._engineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigurationInput() {
    return this._engineConfiguration.internalValue;
  }

  // private_link_info - computed: false, optional: true, required: false
  private _privateLinkInfo = new DbServiceInstancesPrivateLinkInfoOutputReference(this, "private_link_info");
  public get privateLinkInfo() {
    return this._privateLinkInfo;
  }
  public putPrivateLinkInfo(value: DbServiceInstancesPrivateLinkInfo) {
    this._privateLinkInfo.internalValue = value;
  }
  public resetPrivateLinkInfo() {
    this._privateLinkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInfoInput() {
    return this._privateLinkInfo.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new DbServiceInstancesStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DbServiceInstancesStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}

export class DbServiceInstancesList extends cdktf.ComplexList {
  public internalValue? : DbServiceInstances[] | cdktf.IResolvable

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
  public get(index: number): DbServiceInstancesOutputReference {
    return new DbServiceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceIntegrationsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#integrations DbService#integrations}
  */
  readonly integrations?: string[];
}

export function dbServiceIntegrationsConfigToTerraform(struct?: DbServiceIntegrationsConfigOutputReference | DbServiceIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.integrations),
  }
}


export function dbServiceIntegrationsConfigToHclTerraform(struct?: DbServiceIntegrationsConfigOutputReference | DbServiceIntegrationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integrations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.integrations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceIntegrationsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceIntegrationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrations = this._integrations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceIntegrationsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrations = value.integrations;
    }
  }

  // integrations - computed: false, optional: true, required: false
  private _integrations?: string[]; 
  public get integrations() {
    return this.getListAttribute('integrations');
  }
  public set integrations(value: string[]) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }
}
export interface DbServiceMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#day DbService#day}
  */
  readonly day: string;
  /**
  * The duration during which the maintenance window will be allowed to trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#duration DbService#duration}
  */
  readonly duration: number;
  /**
  * Time value in (hh:mm) format. ex. '02:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#time DbService#time}
  */
  readonly time: string;
}

export function dbServiceMaintenanceWindowToTerraform(struct?: DbServiceMaintenanceWindowOutputReference | DbServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    duration: cdktf.numberToTerraform(struct!.duration),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dbServiceMaintenanceWindowToHclTerraform(struct?: DbServiceMaintenanceWindowOutputReference | DbServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._duration = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._duration = value.duration;
      this._time = value.time;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule {
  /**
  * The number of backups to be captured per day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backups_per_day DbService#backups_per_day}
  */
  readonly backupsPerDay?: number;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups_per_day: cdktf.numberToTerraform(struct!.backupsPerDay),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups_per_day: {
      value: cdktf.numberToHclTerraform(struct!.backupsPerDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupsPerDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsPerDay = this._backupsPerDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupsPerDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupsPerDay = value.backupsPerDay;
    }
  }

  // backups_per_day - computed: false, optional: true, required: false
  private _backupsPerDay?: number; 
  public get backupsPerDay() {
    return this.getNumberAttribute('backups_per_day');
  }
  public set backupsPerDay(value: number) {
    this._backupsPerDay = value;
  }
  public resetBackupsPerDay() {
    this._backupsPerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsPerDayInput() {
    return this._backupsPerDay;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#months DbService#months}
  */
  readonly months?: string[];
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
      this._months = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
      this._months = value.months;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }

  // months - computed: false, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates: number[];
  /**
  * Name of a month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month DbService#month}
  */
  readonly month: string;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dates = undefined;
      this._month = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dates = value.dates;
      this._month = value.month;
    }
  }

  // dates - computed: false, optional: false, required: true
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // month - computed: false, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {
  public internalValue? : DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable

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
  public get(index: number): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule;
  /**
  * month_specific_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month_specific_schedule DbService#month_specific_schedule}
  */
  readonly monthSpecificSchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
    month_specific_schedule: cdktf.listMapper(dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform, true)(struct!.monthSpecificSchedule),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList",
    },
    month_specific_schedule: {
      value: cdktf.listMapperHcl(dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform, true)(struct!.monthSpecificSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    if (this._monthSpecificSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSpecificSchedule = this._monthSpecificSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
      this._monthSpecificSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
      this._monthSpecificSchedule.internalValue = value.monthSpecificSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }

  // month_specific_schedule - computed: false, optional: true, required: false
  private _monthSpecificSchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
  public putMonthSpecificSchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable) {
    this._monthSpecificSchedule.internalValue = value;
  }
  public resetMonthSpecificSchedule() {
    this._monthSpecificSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthSpecificScheduleInput() {
    return this._monthSpecificSchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule {
  /**
  * backup_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_start_time DbService#backup_start_time}
  */
  readonly backupStartTime?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#daily_schedule DbService#daily_schedule}
  */
  readonly dailySchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#monthly_schedule DbService#monthly_schedule}
  */
  readonly monthlySchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule;
  /**
  * yearly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#yearly_schedule DbService#yearly_schedule}
  */
  readonly yearlySchedule?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_start_time: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct!.backupStartTime),
    daily_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    monthly_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct!.monthlySchedule),
    weekly_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
    yearly_schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct!.yearlySchedule),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_start_time: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct!.backupStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeList",
    },
    daily_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleList",
    },
    monthly_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleList",
    },
    weekly_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleList",
    },
    yearly_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct!.yearlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartTime = this._backupStartTime?.internalValue;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    if (this._yearlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlySchedule = this._yearlySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupStartTime.internalValue = undefined;
      this._dailySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
      this._yearlySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupStartTime.internalValue = value.backupStartTime;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
      this._yearlySchedule.internalValue = value.yearlySchedule;
    }
  }

  // backup_start_time - computed: false, optional: true, required: false
  private _backupStartTime = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference(this, "backup_start_time");
  public get backupStartTime() {
    return this._backupStartTime;
  }
  public putBackupStartTime(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleBackupStartTime) {
    this._backupStartTime.internalValue = value;
  }
  public resetBackupStartTime() {
    this._backupStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartTimeInput() {
    return this._backupStartTime.internalValue;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference(this, "monthly_schedule");
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleMonthlySchedule) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }

  // yearly_schedule - computed: false, optional: true, required: false
  private _yearlySchedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference(this, "yearly_schedule");
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
  public putYearlySchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleYearlySchedule) {
    this._yearlySchedule.internalValue = value;
  }
  public resetYearlySchedule() {
    this._yearlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyScheduleInput() {
    return this._yearlySchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy {
  /**
  * Custom RPO policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#schedule DbService#schedule}
  */
  readonly schedule: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    schedule: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleToTerraform(struct!.schedule),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._schedule.internalValue = value.schedule;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule {
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#start_time DbService#start_time}
  */
  readonly startTime?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeToTerraform(struct!.startTime),
    weekly_schedule: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeList",
    },
    weekly_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime.internalValue = value.startTime;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime = new DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleStartTime) {
    this._startTime.internalValue = value;
  }
  public resetStartTime() {
    this._startTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy {
  /**
  * Number of days for which the backup of DB Service would be retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#retention_days DbService#retention_days}
  */
  readonly retentionDays: number;
  /**
  * backup_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_start_time DbService#backup_start_time}
  */
  readonly backupStartTime?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    backup_start_time: dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeToTerraform(struct!.backupStartTime),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyOutputReference | DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_start_time: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeToHclTerraform(struct!.backupStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._backupStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartTime = this._backupStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionDays = undefined;
      this._backupStartTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionDays = value.retentionDays;
      this._backupStartTime.internalValue = value.backupStartTime;
    }
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // backup_start_time - computed: false, optional: true, required: false
  private _backupStartTime = new DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTimeOutputReference(this, "backup_start_time");
  public get backupStartTime() {
    return this._backupStartTime;
  }
  public putBackupStartTime(value: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyBackupStartTime) {
    this._backupStartTime.internalValue = value;
  }
  public resetBackupStartTime() {
    this._backupStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartTimeInput() {
    return this._backupStartTime.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigBackupRpoConfig {
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#custom_policy DbService#custom_policy}
  */
  readonly customPolicy?: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy;
  /**
  * full_backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#full_backup_schedule DbService#full_backup_schedule}
  */
  readonly fullBackupSchedule?: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule;
  /**
  * standard_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#standard_policy DbService#standard_policy}
  */
  readonly standardPolicy?: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy;
}

export function dbServiceRpoPolicyConfigBackupRpoConfigToTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigOutputReference | DbServiceRpoPolicyConfigBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_policy: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyToTerraform(struct!.customPolicy),
    full_backup_schedule: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleToTerraform(struct!.fullBackupSchedule),
    standard_policy: dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyToTerraform(struct!.standardPolicy),
  }
}


export function dbServiceRpoPolicyConfigBackupRpoConfigToHclTerraform(struct?: DbServiceRpoPolicyConfigBackupRpoConfigOutputReference | DbServiceRpoPolicyConfigBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_policy: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyToHclTerraform(struct!.customPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyList",
    },
    full_backup_schedule: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleToHclTerraform(struct!.fullBackupSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleList",
    },
    standard_policy: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyToHclTerraform(struct!.standardPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigBackupRpoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigBackupRpoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicy = this._customPolicy?.internalValue;
    }
    if (this._fullBackupSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupSchedule = this._fullBackupSchedule?.internalValue;
    }
    if (this._standardPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardPolicy = this._standardPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigBackupRpoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customPolicy.internalValue = undefined;
      this._fullBackupSchedule.internalValue = undefined;
      this._standardPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customPolicy.internalValue = value.customPolicy;
      this._fullBackupSchedule.internalValue = value.fullBackupSchedule;
      this._standardPolicy.internalValue = value.standardPolicy;
    }
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: DbServiceRpoPolicyConfigBackupRpoConfigCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // full_backup_schedule - computed: false, optional: true, required: false
  private _fullBackupSchedule = new DbServiceRpoPolicyConfigBackupRpoConfigFullBackupScheduleOutputReference(this, "full_backup_schedule");
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }
  public putFullBackupSchedule(value: DbServiceRpoPolicyConfigBackupRpoConfigFullBackupSchedule) {
    this._fullBackupSchedule.internalValue = value;
  }
  public resetFullBackupSchedule() {
    this._fullBackupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupScheduleInput() {
    return this._fullBackupSchedule.internalValue;
  }

  // standard_policy - computed: false, optional: true, required: false
  private _standardPolicy = new DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicyOutputReference(this, "standard_policy");
  public get standardPolicy() {
    return this._standardPolicy;
  }
  public putStandardPolicy(value: DbServiceRpoPolicyConfigBackupRpoConfigStandardPolicy) {
    this._standardPolicy.internalValue = value;
  }
  public resetStandardPolicy() {
    this._standardPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPolicyInput() {
    return this._standardPolicy.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule {
  /**
  * The number of backups to be captured per day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backups_per_day DbService#backups_per_day}
  */
  readonly backupsPerDay?: number;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups_per_day: cdktf.numberToTerraform(struct!.backupsPerDay),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups_per_day: {
      value: cdktf.numberToHclTerraform(struct!.backupsPerDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupsPerDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsPerDay = this._backupsPerDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupsPerDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupsPerDay = value.backupsPerDay;
    }
  }

  // backups_per_day - computed: false, optional: true, required: false
  private _backupsPerDay?: number; 
  public get backupsPerDay() {
    return this.getNumberAttribute('backups_per_day');
  }
  public set backupsPerDay(value: number) {
    this._backupsPerDay = value;
  }
  public resetBackupsPerDay() {
    this._backupsPerDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsPerDayInput() {
    return this._backupsPerDay;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule {
  /**
  * Dates in a month to retain monthly backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#last_day_of_month DbService#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#months DbService#months}
  */
  readonly months?: string[];
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dates = undefined;
      this._lastDayOfMonth = undefined;
      this._months = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dates = value.dates;
      this._lastDayOfMonth = value.lastDayOfMonth;
      this._months = value.months;
    }
  }

  // dates - computed: false, optional: true, required: false
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // last_day_of_month - computed: false, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }

  // months - computed: false, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#dates DbService#dates}
  */
  readonly dates: number[];
  /**
  * Name of a month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month DbService#month}
  */
  readonly month: string;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dates),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dates),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dates = this._dates;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dates = undefined;
      this._month = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dates = value.dates;
      this._month = value.month;
    }
  }

  // dates - computed: false, optional: false, required: true
  private _dates?: number[]; 
  public get dates() {
    return this.getNumberListAttribute('dates');
  }
  public set dates(value: number[]) {
    this._dates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
  }

  // month - computed: false, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {
  public internalValue? : DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable

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
  public get(index: number): DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule {
  /**
  * common_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#common_schedule DbService#common_schedule}
  */
  readonly commonSchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule;
  /**
  * month_specific_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#month_specific_schedule DbService#month_specific_schedule}
  */
  readonly monthSpecificSchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct!.commonSchedule),
    month_specific_schedule: cdktf.listMapper(dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform, true)(struct!.monthSpecificSchedule),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct!.commonSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList",
    },
    month_specific_schedule: {
      value: cdktf.listMapperHcl(dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform, true)(struct!.monthSpecificSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonSchedule = this._commonSchedule?.internalValue;
    }
    if (this._monthSpecificSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSpecificSchedule = this._monthSpecificSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonSchedule.internalValue = undefined;
      this._monthSpecificSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonSchedule.internalValue = value.commonSchedule;
      this._monthSpecificSchedule.internalValue = value.monthSpecificSchedule;
    }
  }

  // common_schedule - computed: false, optional: true, required: false
  private _commonSchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this, "common_schedule");
  public get commonSchedule() {
    return this._commonSchedule;
  }
  public putCommonSchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleCommonSchedule) {
    this._commonSchedule.internalValue = value;
  }
  public resetCommonSchedule() {
    this._commonSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonScheduleInput() {
    return this._commonSchedule.internalValue;
  }

  // month_specific_schedule - computed: false, optional: true, required: false
  private _monthSpecificSchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
  public putMonthSpecificSchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule[] | cdktf.IResolvable) {
    this._monthSpecificSchedule.internalValue = value;
  }
  public resetMonthSpecificSchedule() {
    this._monthSpecificSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthSpecificScheduleInput() {
    return this._monthSpecificSchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicySchedule {
  /**
  * backup_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_start_time DbService#backup_start_time}
  */
  readonly backupStartTime?: DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#daily_schedule DbService#daily_schedule}
  */
  readonly dailySchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#monthly_schedule DbService#monthly_schedule}
  */
  readonly monthlySchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule;
  /**
  * yearly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#yearly_schedule DbService#yearly_schedule}
  */
  readonly yearlySchedule?: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule;
}

export function dbServiceRpoPolicyConfigCustomPolicyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_start_time: dbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct!.backupStartTime),
    daily_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    monthly_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct!.monthlySchedule),
    weekly_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
    yearly_schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct!.yearlySchedule),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyScheduleOutputReference | DbServiceRpoPolicyConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_start_time: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct!.backupStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeList",
    },
    daily_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleList",
    },
    monthly_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleList",
    },
    weekly_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleList",
    },
    yearly_schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct!.yearlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartTime = this._backupStartTime?.internalValue;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    if (this._yearlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlySchedule = this._yearlySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupStartTime.internalValue = undefined;
      this._dailySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
      this._yearlySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupStartTime.internalValue = value.backupStartTime;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
      this._yearlySchedule.internalValue = value.yearlySchedule;
    }
  }

  // backup_start_time - computed: false, optional: true, required: false
  private _backupStartTime = new DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTimeOutputReference(this, "backup_start_time");
  public get backupStartTime() {
    return this._backupStartTime;
  }
  public putBackupStartTime(value: DbServiceRpoPolicyConfigCustomPolicyScheduleBackupStartTime) {
    this._backupStartTime.internalValue = value;
  }
  public resetBackupStartTime() {
    this._backupStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartTimeInput() {
    return this._backupStartTime.internalValue;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlyScheduleOutputReference(this, "monthly_schedule");
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleMonthlySchedule) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }

  // yearly_schedule - computed: false, optional: true, required: false
  private _yearlySchedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleYearlyScheduleOutputReference(this, "yearly_schedule");
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
  public putYearlySchedule(value: DbServiceRpoPolicyConfigCustomPolicyScheduleYearlySchedule) {
    this._yearlySchedule.internalValue = value;
  }
  public resetYearlySchedule() {
    this._yearlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyScheduleInput() {
    return this._yearlySchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigCustomPolicy {
  /**
  * Custom RPO policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#name DbService#name}
  */
  readonly name: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#schedule DbService#schedule}
  */
  readonly schedule: DbServiceRpoPolicyConfigCustomPolicySchedule;
}

export function dbServiceRpoPolicyConfigCustomPolicyToTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyOutputReference | DbServiceRpoPolicyConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    schedule: dbServiceRpoPolicyConfigCustomPolicyScheduleToTerraform(struct!.schedule),
  }
}


export function dbServiceRpoPolicyConfigCustomPolicyToHclTerraform(struct?: DbServiceRpoPolicyConfigCustomPolicyOutputReference | DbServiceRpoPolicyConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: dbServiceRpoPolicyConfigCustomPolicyScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigCustomPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._schedule.internalValue = value.schedule;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new DbServiceRpoPolicyConfigCustomPolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DbServiceRpoPolicyConfigCustomPolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigFullBackupScheduleStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigFullBackupScheduleStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleStartTimeOutputReference | DbServiceRpoPolicyConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigFullBackupScheduleStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleStartTimeOutputReference | DbServiceRpoPolicyConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigFullBackupScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule {
  /**
  * Days in a week to retain weekly backups for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#days DbService#days}
  */
  readonly days?: string[];
}

export function dbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleToTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
  }
}


export function dbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleOutputReference | DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DbServiceRpoPolicyConfigFullBackupSchedule {
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#start_time DbService#start_time}
  */
  readonly startTime?: DbServiceRpoPolicyConfigFullBackupScheduleStartTime;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#weekly_schedule DbService#weekly_schedule}
  */
  readonly weeklySchedule?: DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule;
}

export function dbServiceRpoPolicyConfigFullBackupScheduleToTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleOutputReference | DbServiceRpoPolicyConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: dbServiceRpoPolicyConfigFullBackupScheduleStartTimeToTerraform(struct!.startTime),
    weekly_schedule: dbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function dbServiceRpoPolicyConfigFullBackupScheduleToHclTerraform(struct?: DbServiceRpoPolicyConfigFullBackupScheduleOutputReference | DbServiceRpoPolicyConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: dbServiceRpoPolicyConfigFullBackupScheduleStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigFullBackupScheduleStartTimeList",
    },
    weekly_schedule: {
      value: dbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigFullBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime.internalValue = value.startTime;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime = new DbServiceRpoPolicyConfigFullBackupScheduleStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: DbServiceRpoPolicyConfigFullBackupScheduleStartTime) {
    this._startTime.internalValue = value;
  }
  public resetStartTime() {
    this._startTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new DbServiceRpoPolicyConfigFullBackupScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: DbServiceRpoPolicyConfigFullBackupScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#hour DbService#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#minute DbService#minute}
  */
  readonly minute: number;
}

export function dbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeToTerraform(struct?: DbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeOutputReference | DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function dbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeToHclTerraform(struct?: DbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeOutputReference | DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
    }
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}
export interface DbServiceRpoPolicyConfigStandardPolicy {
  /**
  * Determines whether transaction logs should be retained to enable Point-In-Time Recovery (PITR) functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#include_transaction_logs DbService#include_transaction_logs}
  */
  readonly includeTransactionLogs?: boolean | cdktf.IResolvable;
  /**
  * Number of days for which the snapshot of DB Service would be retained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#retention_days DbService#retention_days}
  */
  readonly retentionDays: number;
  /**
  * snapshot_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#snapshot_start_time DbService#snapshot_start_time}
  */
  readonly snapshotStartTime: DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime;
}

export function dbServiceRpoPolicyConfigStandardPolicyToTerraform(struct?: DbServiceRpoPolicyConfigStandardPolicyOutputReference | DbServiceRpoPolicyConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_transaction_logs: cdktf.booleanToTerraform(struct!.includeTransactionLogs),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    snapshot_start_time: dbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeToTerraform(struct!.snapshotStartTime),
  }
}


export function dbServiceRpoPolicyConfigStandardPolicyToHclTerraform(struct?: DbServiceRpoPolicyConfigStandardPolicyOutputReference | DbServiceRpoPolicyConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_transaction_logs: {
      value: cdktf.booleanToHclTerraform(struct!.includeTransactionLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_start_time: {
      value: dbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeToHclTerraform(struct!.snapshotStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigStandardPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfigStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeTransactionLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionLogs = this._includeTransactionLogs;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._snapshotStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStartTime = this._snapshotStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfigStandardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeTransactionLogs = undefined;
      this._retentionDays = undefined;
      this._snapshotStartTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeTransactionLogs = value.includeTransactionLogs;
      this._retentionDays = value.retentionDays;
      this._snapshotStartTime.internalValue = value.snapshotStartTime;
    }
  }

  // include_transaction_logs - computed: false, optional: true, required: false
  private _includeTransactionLogs?: boolean | cdktf.IResolvable; 
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }
  public set includeTransactionLogs(value: boolean | cdktf.IResolvable) {
    this._includeTransactionLogs = value;
  }
  public resetIncludeTransactionLogs() {
    this._includeTransactionLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionLogsInput() {
    return this._includeTransactionLogs;
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // snapshot_start_time - computed: false, optional: false, required: true
  private _snapshotStartTime = new DbServiceRpoPolicyConfigStandardPolicySnapshotStartTimeOutputReference(this, "snapshot_start_time");
  public get snapshotStartTime() {
    return this._snapshotStartTime;
  }
  public putSnapshotStartTime(value: DbServiceRpoPolicyConfigStandardPolicySnapshotStartTime) {
    this._snapshotStartTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStartTimeInput() {
    return this._snapshotStartTime.internalValue;
  }
}
export interface DbServiceRpoPolicyConfig {
  /**
  * Specify whether system will take automatic backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_auto_backup DbService#enable_auto_backup}
  */
  readonly enableAutoBackup?: boolean | cdktf.IResolvable;
  /**
  * Specify whether system will take automatic snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#enable_auto_snapshot DbService#enable_auto_snapshot}
  */
  readonly enableAutoSnapshot: boolean | cdktf.IResolvable;
  /**
  * Determines whether transaction logs should be retained to enable Point-In-Time Recovery (PITR) functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#include_transaction_logs DbService#include_transaction_logs}
  */
  readonly includeTransactionLogs?: boolean | cdktf.IResolvable;
  /**
  * backup_rpo_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#backup_rpo_config DbService#backup_rpo_config}
  */
  readonly backupRpoConfig?: DbServiceRpoPolicyConfigBackupRpoConfig;
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#custom_policy DbService#custom_policy}
  */
  readonly customPolicy?: DbServiceRpoPolicyConfigCustomPolicy;
  /**
  * full_backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#full_backup_schedule DbService#full_backup_schedule}
  */
  readonly fullBackupSchedule?: DbServiceRpoPolicyConfigFullBackupSchedule;
  /**
  * standard_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/resources/db_service#standard_policy DbService#standard_policy}
  */
  readonly standardPolicy?: DbServiceRpoPolicyConfigStandardPolicy;
}

export function dbServiceRpoPolicyConfigToTerraform(struct?: DbServiceRpoPolicyConfigOutputReference | DbServiceRpoPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_backup: cdktf.booleanToTerraform(struct!.enableAutoBackup),
    enable_auto_snapshot: cdktf.booleanToTerraform(struct!.enableAutoSnapshot),
    include_transaction_logs: cdktf.booleanToTerraform(struct!.includeTransactionLogs),
    backup_rpo_config: dbServiceRpoPolicyConfigBackupRpoConfigToTerraform(struct!.backupRpoConfig),
    custom_policy: dbServiceRpoPolicyConfigCustomPolicyToTerraform(struct!.customPolicy),
    full_backup_schedule: dbServiceRpoPolicyConfigFullBackupScheduleToTerraform(struct!.fullBackupSchedule),
    standard_policy: dbServiceRpoPolicyConfigStandardPolicyToTerraform(struct!.standardPolicy),
  }
}


export function dbServiceRpoPolicyConfigToHclTerraform(struct?: DbServiceRpoPolicyConfigOutputReference | DbServiceRpoPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_backup: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auto_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_transaction_logs: {
      value: cdktf.booleanToHclTerraform(struct!.includeTransactionLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_rpo_config: {
      value: dbServiceRpoPolicyConfigBackupRpoConfigToHclTerraform(struct!.backupRpoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigBackupRpoConfigList",
    },
    custom_policy: {
      value: dbServiceRpoPolicyConfigCustomPolicyToHclTerraform(struct!.customPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigCustomPolicyList",
    },
    full_backup_schedule: {
      value: dbServiceRpoPolicyConfigFullBackupScheduleToHclTerraform(struct!.fullBackupSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigFullBackupScheduleList",
    },
    standard_policy: {
      value: dbServiceRpoPolicyConfigStandardPolicyToHclTerraform(struct!.standardPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DbServiceRpoPolicyConfigStandardPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbServiceRpoPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbServiceRpoPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoBackup = this._enableAutoBackup;
    }
    if (this._enableAutoSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoSnapshot = this._enableAutoSnapshot;
    }
    if (this._includeTransactionLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTransactionLogs = this._includeTransactionLogs;
    }
    if (this._backupRpoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRpoConfig = this._backupRpoConfig?.internalValue;
    }
    if (this._customPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicy = this._customPolicy?.internalValue;
    }
    if (this._fullBackupSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupSchedule = this._fullBackupSchedule?.internalValue;
    }
    if (this._standardPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardPolicy = this._standardPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceRpoPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoBackup = undefined;
      this._enableAutoSnapshot = undefined;
      this._includeTransactionLogs = undefined;
      this._backupRpoConfig.internalValue = undefined;
      this._customPolicy.internalValue = undefined;
      this._fullBackupSchedule.internalValue = undefined;
      this._standardPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoBackup = value.enableAutoBackup;
      this._enableAutoSnapshot = value.enableAutoSnapshot;
      this._includeTransactionLogs = value.includeTransactionLogs;
      this._backupRpoConfig.internalValue = value.backupRpoConfig;
      this._customPolicy.internalValue = value.customPolicy;
      this._fullBackupSchedule.internalValue = value.fullBackupSchedule;
      this._standardPolicy.internalValue = value.standardPolicy;
    }
  }

  // enable_auto_backup - computed: false, optional: true, required: false
  private _enableAutoBackup?: boolean | cdktf.IResolvable; 
  public get enableAutoBackup() {
    return this.getBooleanAttribute('enable_auto_backup');
  }
  public set enableAutoBackup(value: boolean | cdktf.IResolvable) {
    this._enableAutoBackup = value;
  }
  public resetEnableAutoBackup() {
    this._enableAutoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBackupInput() {
    return this._enableAutoBackup;
  }

  // enable_auto_snapshot - computed: false, optional: false, required: true
  private _enableAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }
  public set enableAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._enableAutoSnapshot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoSnapshotInput() {
    return this._enableAutoSnapshot;
  }

  // include_transaction_logs - computed: false, optional: true, required: false
  private _includeTransactionLogs?: boolean | cdktf.IResolvable; 
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }
  public set includeTransactionLogs(value: boolean | cdktf.IResolvable) {
    this._includeTransactionLogs = value;
  }
  public resetIncludeTransactionLogs() {
    this._includeTransactionLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTransactionLogsInput() {
    return this._includeTransactionLogs;
  }

  // backup_rpo_config - computed: false, optional: true, required: false
  private _backupRpoConfig = new DbServiceRpoPolicyConfigBackupRpoConfigOutputReference(this, "backup_rpo_config");
  public get backupRpoConfig() {
    return this._backupRpoConfig;
  }
  public putBackupRpoConfig(value: DbServiceRpoPolicyConfigBackupRpoConfig) {
    this._backupRpoConfig.internalValue = value;
  }
  public resetBackupRpoConfig() {
    this._backupRpoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRpoConfigInput() {
    return this._backupRpoConfig.internalValue;
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new DbServiceRpoPolicyConfigCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: DbServiceRpoPolicyConfigCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // full_backup_schedule - computed: false, optional: true, required: false
  private _fullBackupSchedule = new DbServiceRpoPolicyConfigFullBackupScheduleOutputReference(this, "full_backup_schedule");
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }
  public putFullBackupSchedule(value: DbServiceRpoPolicyConfigFullBackupSchedule) {
    this._fullBackupSchedule.internalValue = value;
  }
  public resetFullBackupSchedule() {
    this._fullBackupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupScheduleInput() {
    return this._fullBackupSchedule.internalValue;
  }

  // standard_policy - computed: false, optional: true, required: false
  private _standardPolicy = new DbServiceRpoPolicyConfigStandardPolicyOutputReference(this, "standard_policy");
  public get standardPolicy() {
    return this._standardPolicy;
  }
  public putStandardPolicy(value: DbServiceRpoPolicyConfigStandardPolicy) {
    this._standardPolicy.internalValue = value;
  }
  public resetStandardPolicy() {
    this._standardPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPolicyInput() {
    return this._standardPolicy.internalValue;
  }
}
export interface DbServiceServiceConnectivityComputesConnectivityPortAccessConfig {
}

export function dbServiceServiceConnectivityComputesConnectivityPortAccessConfigToTerraform(struct?: DbServiceServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityComputesConnectivityPortAccessConfigToHclTerraform(struct?: DbServiceServiceConnectivityComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityComputesConnectivityPortAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DbServiceServiceConnectivityComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference {
    return new DbServiceServiceConnectivityComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityComputesConnectivity {
}

export function dbServiceServiceConnectivityComputesConnectivityToTerraform(struct?: DbServiceServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityComputesConnectivityToHclTerraform(struct?: DbServiceServiceConnectivityComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityComputesConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_resource_id - computed: true, optional: false, required: false
  public get computeResourceId() {
    return this.getStringAttribute('compute_resource_id');
  }

  // port_access_config - computed: true, optional: false, required: false
  private _portAccessConfig = new DbServiceServiceConnectivityComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DbServiceServiceConnectivityComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityComputesConnectivityOutputReference {
    return new DbServiceServiceConnectivityComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityConnectStrings {
}

export function dbServiceServiceConnectivityConnectStringsToTerraform(struct?: DbServiceServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityConnectStringsToHclTerraform(struct?: DbServiceServiceConnectivityConnectStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityConnectStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityConnectStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityConnectStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage_type - computed: true, optional: false, required: false
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
}

export class DbServiceServiceConnectivityConnectStringsList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityConnectStringsOutputReference {
    return new DbServiceServiceConnectivityConnectStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityPrivateLink {
}

export function dbServiceServiceConnectivityPrivateLinkToTerraform(struct?: DbServiceServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityPrivateLinkToHclTerraform(struct?: DbServiceServiceConnectivityPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityPrivateLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_azure_subscription_ids - computed: true, optional: false, required: false
  public get clientAzureSubscriptionIds() {
    return this.getListAttribute('client_azure_subscription_ids');
  }

  // endpoint_service_name - computed: true, optional: false, required: false
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // service_principals - computed: true, optional: false, required: false
  public get servicePrincipals() {
    return this.getListAttribute('service_principals');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DbServiceServiceConnectivityPrivateLinkList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityPrivateLinkOutputReference {
    return new DbServiceServiceConnectivityPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig {
}

export function dbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigToHclTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference {
    return new DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity {
}

export function dbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityToTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityToHclTerraform(struct?: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_resource_id - computed: true, optional: false, required: false
  public get computeResourceId() {
    return this.getStringAttribute('compute_resource_id');
  }

  // port_access_config - computed: true, optional: false, required: false
  private _portAccessConfig = new DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityPortAccessConfigList(this, "port_access_config", false);
  public get portAccessConfig() {
    return this._portAccessConfig;
  }
}

export class DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityList extends cdktf.ComplexList {

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
  public get(index: number): DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference {
    return new DbServiceServiceConnectivityUpdateInProgressInfoComputesConnectivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
