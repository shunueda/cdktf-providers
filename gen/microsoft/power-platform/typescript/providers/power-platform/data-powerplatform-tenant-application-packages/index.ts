// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerplatformTenantApplicationPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Dynamics 365 application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages#name DataPowerplatformTenantApplicationPackages#name}
  */
  readonly name?: string;
  /**
  * Publisher Name of the Dynamics 365 application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages#publisher_name DataPowerplatformTenantApplicationPackages#publisher_name}
  */
  readonly publisherName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages#timeouts DataPowerplatformTenantApplicationPackages#timeouts}
  */
  readonly timeouts?: DataPowerplatformTenantApplicationPackagesTimeouts;
}
export interface DataPowerplatformTenantApplicationPackagesApplicationsLastError {
}

export function dataPowerplatformTenantApplicationPackagesApplicationsLastErrorToTerraform(struct?: DataPowerplatformTenantApplicationPackagesApplicationsLastError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantApplicationPackagesApplicationsLastErrorToHclTerraform(struct?: DataPowerplatformTenantApplicationPackagesApplicationsLastError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantApplicationPackagesApplicationsLastErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformTenantApplicationPackagesApplicationsLastError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantApplicationPackagesApplicationsLastError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_name - computed: true, optional: false, required: false
  public get errorName() {
    return this.getStringAttribute('error_name');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerplatformTenantApplicationPackagesApplicationsLastErrorList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerplatformTenantApplicationPackagesApplicationsLastErrorOutputReference {
    return new DataPowerplatformTenantApplicationPackagesApplicationsLastErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformTenantApplicationPackagesApplications {
}

export function dataPowerplatformTenantApplicationPackagesApplicationsToTerraform(struct?: DataPowerplatformTenantApplicationPackagesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformTenantApplicationPackagesApplicationsToHclTerraform(struct?: DataPowerplatformTenantApplicationPackagesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformTenantApplicationPackagesApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformTenantApplicationPackagesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantApplicationPackagesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_descprition - computed: true, optional: false, required: false
  public get applicationDescprition() {
    return this.getStringAttribute('application_descprition');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_visibility - computed: true, optional: false, required: false
  public get applicationVisibility() {
    return this.getStringAttribute('application_visibility');
  }

  // catalog_visibility - computed: true, optional: false, required: false
  public get catalogVisibility() {
    return this.getStringAttribute('catalog_visibility');
  }

  // last_error - computed: true, optional: false, required: false
  private _lastError = new DataPowerplatformTenantApplicationPackagesApplicationsLastErrorList(this, "last_error", false);
  public get lastError() {
    return this._lastError;
  }

  // learn_more_url - computed: true, optional: false, required: false
  public get learnMoreUrl() {
    return this.getStringAttribute('learn_more_url');
  }

  // localized_description - computed: true, optional: false, required: false
  public get localizedDescription() {
    return this.getStringAttribute('localized_description');
  }

  // localized_name - computed: true, optional: false, required: false
  public get localizedName() {
    return this.getStringAttribute('localized_name');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
}

export class DataPowerplatformTenantApplicationPackagesApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerplatformTenantApplicationPackagesApplicationsOutputReference {
    return new DataPowerplatformTenantApplicationPackagesApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformTenantApplicationPackagesTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages#read DataPowerplatformTenantApplicationPackages#read}
  */
  readonly read?: string;
}

export function dataPowerplatformTenantApplicationPackagesTimeoutsToTerraform(struct?: DataPowerplatformTenantApplicationPackagesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowerplatformTenantApplicationPackagesTimeoutsToHclTerraform(struct?: DataPowerplatformTenantApplicationPackagesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformTenantApplicationPackagesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformTenantApplicationPackagesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformTenantApplicationPackagesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages powerplatform_tenant_application_packages}
*/
export class DataPowerplatformTenantApplicationPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_tenant_application_packages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerplatformTenantApplicationPackages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerplatformTenantApplicationPackages to import
  * @param importFromId The id of the existing DataPowerplatformTenantApplicationPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerplatformTenantApplicationPackages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_tenant_application_packages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_tenant_application_packages powerplatform_tenant_application_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerplatformTenantApplicationPackagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerplatformTenantApplicationPackagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_tenant_application_packages',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._publisherName = config.publisherName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: false
  private _applications = new DataPowerplatformTenantApplicationPackagesApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
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

  // publisher_name - computed: false, optional: true, required: false
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  public resetPublisherName() {
    this._publisherName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowerplatformTenantApplicationPackagesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowerplatformTenantApplicationPackagesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      publisher_name: cdktf.stringToTerraform(this._publisherName),
      timeouts: dataPowerplatformTenantApplicationPackagesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publisher_name: {
        value: cdktf.stringToHclTerraform(this._publisherName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataPowerplatformTenantApplicationPackagesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformTenantApplicationPackagesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
