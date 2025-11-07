// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeFirmwareCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of catalog names which can filter the datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_catalog#names DataOmeFirmwareCatalog#names}
  */
  readonly names?: string[];
}
export interface DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselines {
}

export function dataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesToTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesToHclTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_id - computed: true, optional: false, required: false
  public get baselineId() {
    return this.getNumberAttribute('baseline_id');
  }

  // baseline_name - computed: true, optional: false, required: false
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }
}

export class DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesOutputReference {
    return new DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeFirmwareCatalogFirmwareCatalogsRepository {
}

export function dataOmeFirmwareCatalogFirmwareCatalogsRepositoryToTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareCatalogFirmwareCatalogsRepositoryToHclTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareCatalogFirmwareCatalogsRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeFirmwareCatalogFirmwareCatalogsRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareCatalogFirmwareCatalogsRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_existing_catalog - computed: true, optional: false, required: false
  public get backupExistingCatalog() {
    return this.getBooleanAttribute('backup_existing_catalog');
  }

  // check_certificate - computed: true, optional: false, required: false
  public get checkCertificate() {
    return this.getBooleanAttribute('check_certificate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repository_type - computed: true, optional: false, required: false
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataOmeFirmwareCatalogFirmwareCatalogsSchedule {
}

export function dataOmeFirmwareCatalogFirmwareCatalogsScheduleToTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareCatalogFirmwareCatalogsScheduleToHclTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareCatalogFirmwareCatalogsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeFirmwareCatalogFirmwareCatalogsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareCatalogFirmwareCatalogsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // run_later - computed: true, optional: false, required: false
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }

  // run_now - computed: true, optional: false, required: false
  public get runNow() {
    return this.getBooleanAttribute('run_now');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataOmeFirmwareCatalogFirmwareCatalogs {
}

export function dataOmeFirmwareCatalogFirmwareCatalogsToTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareCatalogFirmwareCatalogsToHclTerraform(struct?: DataOmeFirmwareCatalogFirmwareCatalogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareCatalogFirmwareCatalogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareCatalogFirmwareCatalogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareCatalogFirmwareCatalogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_baselines - computed: true, optional: false, required: false
  private _associatedBaselines = new DataOmeFirmwareCatalogFirmwareCatalogsAssociatedBaselinesList(this, "associated_baselines", false);
  public get associatedBaselines() {
    return this._associatedBaselines;
  }

  // baseline_location - computed: true, optional: false, required: false
  public get baselineLocation() {
    return this.getStringAttribute('baseline_location');
  }

  // bundles_count - computed: true, optional: false, required: false
  public get bundlesCount() {
    return this.getNumberAttribute('bundles_count');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // manifest_identifier - computed: true, optional: false, required: false
  public get manifestIdentifier() {
    return this.getStringAttribute('manifest_identifier');
  }

  // manifest_version - computed: true, optional: false, required: false
  public get manifestVersion() {
    return this.getStringAttribute('manifest_version');
  }

  // next_update - computed: true, optional: false, required: false
  public get nextUpdate() {
    return this.getStringAttribute('next_update');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getNumberAttribute('owner_id');
  }

  // predcessor_identifier - computed: true, optional: false, required: false
  public get predcessorIdentifier() {
    return this.getStringAttribute('predcessor_identifier');
  }

  // release_identifier - computed: true, optional: false, required: false
  public get releaseIdentifier() {
    return this.getStringAttribute('release_identifier');
  }

  // repository - computed: true, optional: false, required: false
  private _repository = new DataOmeFirmwareCatalogFirmwareCatalogsRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataOmeFirmwareCatalogFirmwareCatalogsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }
}

export class DataOmeFirmwareCatalogFirmwareCatalogsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareCatalogFirmwareCatalogsOutputReference {
    return new DataOmeFirmwareCatalogFirmwareCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_catalog ome_firmware_catalog}
*/
export class DataOmeFirmwareCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_firmware_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeFirmwareCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeFirmwareCatalog to import
  * @param importFromId The id of the existing DataOmeFirmwareCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeFirmwareCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_firmware_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_catalog ome_firmware_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeFirmwareCatalogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeFirmwareCatalogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_firmware_catalog',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._names = config.names;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firmware_catalogs - computed: true, optional: false, required: false
  private _firmwareCatalogs = new DataOmeFirmwareCatalogFirmwareCatalogsList(this, "firmware_catalogs", false);
  public get firmwareCatalogs() {
    return this._firmwareCatalogs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._names),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
