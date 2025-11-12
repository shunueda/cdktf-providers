// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirmwareCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Catalog File Path. Path on the share to gather catalog data. This field is required for share_types (NFS, CIFS, HTTP, HTTPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#catalog_file_path FirmwareCatalog#catalog_file_path}
  */
  readonly catalogFilePath?: string;
  /**
  * Catalog Refresh Schedule, when using automatic catalog update the schedule is required for cadence of the update. If catalog_update_type is set to manual, this field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#catalog_refresh_schedule FirmwareCatalog#catalog_refresh_schedule}
  */
  readonly catalogRefreshSchedule?: FirmwareCatalogCatalogRefreshSchedule;
  /**
  * Catalog Update Type. Sets the frequency of catalog updates. Defaults to Manual. If set to automatic, the catalog_refresh_schedule field will need to be set. Options are (Manual, Automatic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#catalog_update_type FirmwareCatalog#catalog_update_type}
  */
  readonly catalogUpdateType?: string;
  /**
  * Domain. The domain for the catalog. This field is optional and only used for share_types (CIFS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#domain FirmwareCatalog#domain}
  */
  readonly domain?: string;
  /**
  * Name of the new catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#name FirmwareCatalog#name}
  */
  readonly name: string;
  /**
  * Share Address. Gives the Ipv4, Ipv6, or FQDN of the share. This field is required for share_types (NFS, CIFS, HTTP, HTTPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#share_address FirmwareCatalog#share_address}
  */
  readonly shareAddress?: string;
  /**
  * Share Password. The password related to the share address. This field is required for share_types (CIFS, HTTPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#share_password FirmwareCatalog#share_password}
  */
  readonly sharePassword?: string;
  /**
  * Share Type, the type of share the catalog will pull from, Defaults to Dell. The different options will have different required fields to work properly. Options are (DELL, NFS, CIFS, HTTP, HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#share_type FirmwareCatalog#share_type}
  */
  readonly shareType?: string;
  /**
  * Share User. The username related to the share address. This field is required for share_types (CIFS, HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#share_user FirmwareCatalog#share_user}
  */
  readonly shareUser?: string;
}
export interface FirmwareCatalogAssociatedBaselines {
}

export function firmwareCatalogAssociatedBaselinesToTerraform(struct?: FirmwareCatalogAssociatedBaselines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firmwareCatalogAssociatedBaselinesToHclTerraform(struct?: FirmwareCatalogAssociatedBaselines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirmwareCatalogAssociatedBaselinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirmwareCatalogAssociatedBaselines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareCatalogAssociatedBaselines | undefined) {
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

export class FirmwareCatalogAssociatedBaselinesList extends cdktf.ComplexList {

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
  public get(index: number): FirmwareCatalogAssociatedBaselinesOutputReference {
    return new FirmwareCatalogAssociatedBaselinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirmwareCatalogCatalogRefreshSchedule {
  /**
  * AM/PM for the schedule. Options are (AM, PM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#am_pm FirmwareCatalog#am_pm}
  */
  readonly amPm?: string;
  /**
  * Cadence. Options are(Weekly, Daily).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#cadence FirmwareCatalog#cadence}
  */
  readonly cadence?: string;
  /**
  * Day of the Week, only useful for weekly schedules. Options are(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#day_of_the_week FirmwareCatalog#day_of_the_week}
  */
  readonly dayOfTheWeek?: string;
  /**
  * Time of Day for the schedule in hour increments. Options are (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#time_of_day FirmwareCatalog#time_of_day}
  */
  readonly timeOfDay?: number;
}

export function firmwareCatalogCatalogRefreshScheduleToTerraform(struct?: FirmwareCatalogCatalogRefreshSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    am_pm: cdktf.stringToTerraform(struct!.amPm),
    cadence: cdktf.stringToTerraform(struct!.cadence),
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time_of_day: cdktf.numberToTerraform(struct!.timeOfDay),
  }
}


export function firmwareCatalogCatalogRefreshScheduleToHclTerraform(struct?: FirmwareCatalogCatalogRefreshSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    am_pm: {
      value: cdktf.stringToHclTerraform(struct!.amPm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cadence: {
      value: cdktf.stringToHclTerraform(struct!.cadence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_the_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfTheWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_day: {
      value: cdktf.numberToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirmwareCatalogCatalogRefreshScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirmwareCatalogCatalogRefreshSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amPm !== undefined) {
      hasAnyValues = true;
      internalValueResult.amPm = this._amPm;
    }
    if (this._cadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence;
    }
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareCatalogCatalogRefreshSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amPm = undefined;
      this._cadence = undefined;
      this._dayOfTheWeek = undefined;
      this._timeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amPm = value.amPm;
      this._cadence = value.cadence;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._timeOfDay = value.timeOfDay;
    }
  }

  // am_pm - computed: true, optional: true, required: false
  private _amPm?: string; 
  public get amPm() {
    return this.getStringAttribute('am_pm');
  }
  public set amPm(value: string) {
    this._amPm = value;
  }
  public resetAmPm() {
    this._amPm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amPmInput() {
    return this._amPm;
  }

  // cadence - computed: true, optional: true, required: false
  private _cadence?: string; 
  public get cadence() {
    return this.getStringAttribute('cadence');
  }
  public set cadence(value: string) {
    this._cadence = value;
  }
  public resetCadence() {
    this._cadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence;
  }

  // day_of_the_week - computed: true, optional: true, required: false
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  public resetDayOfTheWeek() {
    this._dayOfTheWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: number; 
  public get timeOfDay() {
    return this.getNumberAttribute('time_of_day');
  }
  public set timeOfDay(value: number) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }
}
export interface FirmwareCatalogRepository {
}

export function firmwareCatalogRepositoryToTerraform(struct?: FirmwareCatalogRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firmwareCatalogRepositoryToHclTerraform(struct?: FirmwareCatalogRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirmwareCatalogRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirmwareCatalogRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareCatalogRepository | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog ome_firmware_catalog}
*/
export class FirmwareCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_firmware_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirmwareCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirmwareCatalog to import
  * @param importFromId The id of the existing FirmwareCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirmwareCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_firmware_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_catalog ome_firmware_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirmwareCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: FirmwareCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_firmware_catalog',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogFilePath = config.catalogFilePath;
    this._catalogRefreshSchedule.internalValue = config.catalogRefreshSchedule;
    this._catalogUpdateType = config.catalogUpdateType;
    this._domain = config.domain;
    this._name = config.name;
    this._shareAddress = config.shareAddress;
    this._sharePassword = config.sharePassword;
    this._shareType = config.shareType;
    this._shareUser = config.shareUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_baselines - computed: true, optional: false, required: false
  private _associatedBaselines = new FirmwareCatalogAssociatedBaselinesList(this, "associated_baselines", false);
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

  // catalog_file_path - computed: false, optional: true, required: false
  private _catalogFilePath?: string; 
  public get catalogFilePath() {
    return this.getStringAttribute('catalog_file_path');
  }
  public set catalogFilePath(value: string) {
    this._catalogFilePath = value;
  }
  public resetCatalogFilePath() {
    this._catalogFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogFilePathInput() {
    return this._catalogFilePath;
  }

  // catalog_refresh_schedule - computed: true, optional: true, required: false
  private _catalogRefreshSchedule = new FirmwareCatalogCatalogRefreshScheduleOutputReference(this, "catalog_refresh_schedule");
  public get catalogRefreshSchedule() {
    return this._catalogRefreshSchedule;
  }
  public putCatalogRefreshSchedule(value: FirmwareCatalogCatalogRefreshSchedule) {
    this._catalogRefreshSchedule.internalValue = value;
  }
  public resetCatalogRefreshSchedule() {
    this._catalogRefreshSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogRefreshScheduleInput() {
    return this._catalogRefreshSchedule.internalValue;
  }

  // catalog_update_type - computed: true, optional: true, required: false
  private _catalogUpdateType?: string; 
  public get catalogUpdateType() {
    return this.getStringAttribute('catalog_update_type');
  }
  public set catalogUpdateType(value: string) {
    this._catalogUpdateType = value;
  }
  public resetCatalogUpdateType() {
    this._catalogUpdateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogUpdateTypeInput() {
    return this._catalogUpdateType;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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
  private _repository = new FirmwareCatalogRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }

  // share_address - computed: false, optional: true, required: false
  private _shareAddress?: string; 
  public get shareAddress() {
    return this.getStringAttribute('share_address');
  }
  public set shareAddress(value: string) {
    this._shareAddress = value;
  }
  public resetShareAddress() {
    this._shareAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareAddressInput() {
    return this._shareAddress;
  }

  // share_password - computed: false, optional: true, required: false
  private _sharePassword?: string; 
  public get sharePassword() {
    return this.getStringAttribute('share_password');
  }
  public set sharePassword(value: string) {
    this._sharePassword = value;
  }
  public resetSharePassword() {
    this._sharePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePasswordInput() {
    return this._sharePassword;
  }

  // share_type - computed: true, optional: true, required: false
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }

  // share_user - computed: false, optional: true, required: false
  private _shareUser?: string; 
  public get shareUser() {
    return this.getStringAttribute('share_user');
  }
  public set shareUser(value: string) {
    this._shareUser = value;
  }
  public resetShareUser() {
    this._shareUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareUserInput() {
    return this._shareUser;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_file_path: cdktf.stringToTerraform(this._catalogFilePath),
      catalog_refresh_schedule: firmwareCatalogCatalogRefreshScheduleToTerraform(this._catalogRefreshSchedule.internalValue),
      catalog_update_type: cdktf.stringToTerraform(this._catalogUpdateType),
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
      share_address: cdktf.stringToTerraform(this._shareAddress),
      share_password: cdktf.stringToTerraform(this._sharePassword),
      share_type: cdktf.stringToTerraform(this._shareType),
      share_user: cdktf.stringToTerraform(this._shareUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_file_path: {
        value: cdktf.stringToHclTerraform(this._catalogFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_refresh_schedule: {
        value: firmwareCatalogCatalogRefreshScheduleToHclTerraform(this._catalogRefreshSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirmwareCatalogCatalogRefreshSchedule",
      },
      catalog_update_type: {
        value: cdktf.stringToHclTerraform(this._catalogUpdateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_address: {
        value: cdktf.stringToHclTerraform(this._shareAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_password: {
        value: cdktf.stringToHclTerraform(this._sharePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_type: {
        value: cdktf.stringToHclTerraform(this._shareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_user: {
        value: cdktf.stringToHclTerraform(this._shareUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
