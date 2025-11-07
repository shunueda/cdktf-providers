// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contract ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#contract_id Property#contract_id}
  */
  readonly contractId: string;
  /**
  * Group ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#group_id Property#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#id Property#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name to give to the Property (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#name Property#name}
  */
  readonly name: string;
  /**
  * Product ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#product_id Property#product_id}
  */
  readonly productId: string;
  /**
  * Property ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#property_id Property#property_id}
  */
  readonly propertyId?: string;
  /**
  * Specify the rule format version (defaults to latest version available when created)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#rule_format Property#rule_format}
  */
  readonly ruleFormat?: string;
  /**
  * Property Rules as JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#rules Property#rules}
  */
  readonly rules?: string;
  /**
  * Specifies whether hostname bucket is used with this property. It allows you to add or remove property hostnames without incrementing property versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#use_hostname_bucket Property#use_hostname_bucket}
  */
  readonly useHostnameBucket?: boolean | cdktf.IResolvable;
  /**
  * Property version notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#version_notes Property#version_notes}
  */
  readonly versionNotes?: string;
  /**
  * hostnames block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#hostnames Property#hostnames}
  */
  readonly hostnames?: PropertyHostnames[] | cdktf.IResolvable;
}
export interface PropertyRuleErrors {
}

export function propertyRuleErrorsToTerraform(struct?: PropertyRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function propertyRuleErrorsToHclTerraform(struct?: PropertyRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PropertyRuleErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertyRuleErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyRuleErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior_name - computed: true, optional: false, required: false
  public get behaviorName() {
    return this.getStringAttribute('behavior_name');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_location - computed: true, optional: false, required: false
  public get errorLocation() {
    return this.getStringAttribute('error_location');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PropertyRuleErrorsList extends cdktf.ComplexList {

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
  public get(index: number): PropertyRuleErrorsOutputReference {
    return new PropertyRuleErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PropertyRuleWarnings {
}

export function propertyRuleWarningsToTerraform(struct?: PropertyRuleWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function propertyRuleWarningsToHclTerraform(struct?: PropertyRuleWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PropertyRuleWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertyRuleWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyRuleWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior_name - computed: true, optional: false, required: false
  public get behaviorName() {
    return this.getStringAttribute('behavior_name');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_location - computed: true, optional: false, required: false
  public get errorLocation() {
    return this.getStringAttribute('error_location');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PropertyRuleWarningsList extends cdktf.ComplexList {

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
  public get(index: number): PropertyRuleWarningsOutputReference {
    return new PropertyRuleWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PropertyHostnamesCertStatus {
}

export function propertyHostnamesCertStatusToTerraform(struct?: PropertyHostnamesCertStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function propertyHostnamesCertStatusToHclTerraform(struct?: PropertyHostnamesCertStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PropertyHostnamesCertStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertyHostnamesCertStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyHostnamesCertStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // production_status - computed: true, optional: false, required: false
  public get productionStatus() {
    return this.getStringAttribute('production_status');
  }

  // staging_status - computed: true, optional: false, required: false
  public get stagingStatus() {
    return this.getStringAttribute('staging_status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class PropertyHostnamesCertStatusList extends cdktf.ComplexList {
  public internalValue? : PropertyHostnamesCertStatus[] | cdktf.IResolvable

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
  public get(index: number): PropertyHostnamesCertStatusOutputReference {
    return new PropertyHostnamesCertStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PropertyHostnames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#cert_provisioning_type Property#cert_provisioning_type}
  */
  readonly certProvisioningType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#cname_from Property#cname_from}
  */
  readonly cnameFrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#cname_to Property#cname_to}
  */
  readonly cnameTo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#cname_type Property#cname_type}
  */
  readonly cnameType?: string;
  /**
  * cert_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#cert_status Property#cert_status}
  */
  readonly certStatus?: PropertyHostnamesCertStatus[] | cdktf.IResolvable;
}

export function propertyHostnamesToTerraform(struct?: PropertyHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_provisioning_type: cdktf.stringToTerraform(struct!.certProvisioningType),
    cname_from: cdktf.stringToTerraform(struct!.cnameFrom),
    cname_to: cdktf.stringToTerraform(struct!.cnameTo),
    cname_type: cdktf.stringToTerraform(struct!.cnameType),
    cert_status: cdktf.listMapper(propertyHostnamesCertStatusToTerraform, true)(struct!.certStatus),
  }
}


export function propertyHostnamesToHclTerraform(struct?: PropertyHostnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_provisioning_type: {
      value: cdktf.stringToHclTerraform(struct!.certProvisioningType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname_from: {
      value: cdktf.stringToHclTerraform(struct!.cnameFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname_to: {
      value: cdktf.stringToHclTerraform(struct!.cnameTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname_type: {
      value: cdktf.stringToHclTerraform(struct!.cnameType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_status: {
      value: cdktf.listMapperHcl(propertyHostnamesCertStatusToHclTerraform, true)(struct!.certStatus),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyHostnamesCertStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyHostnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertyHostnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certProvisioningType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certProvisioningType = this._certProvisioningType;
    }
    if (this._cnameFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameFrom = this._cnameFrom;
    }
    if (this._cnameTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameTo = this._cnameTo;
    }
    if (this._cnameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameType = this._cnameType;
    }
    if (this._certStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatus = this._certStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyHostnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certProvisioningType = undefined;
      this._cnameFrom = undefined;
      this._cnameTo = undefined;
      this._cnameType = undefined;
      this._certStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certProvisioningType = value.certProvisioningType;
      this._cnameFrom = value.cnameFrom;
      this._cnameTo = value.cnameTo;
      this._cnameType = value.cnameType;
      this._certStatus.internalValue = value.certStatus;
    }
  }

  // cert_provisioning_type - computed: false, optional: false, required: true
  private _certProvisioningType?: string; 
  public get certProvisioningType() {
    return this.getStringAttribute('cert_provisioning_type');
  }
  public set certProvisioningType(value: string) {
    this._certProvisioningType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certProvisioningTypeInput() {
    return this._certProvisioningType;
  }

  // cname_from - computed: false, optional: false, required: true
  private _cnameFrom?: string; 
  public get cnameFrom() {
    return this.getStringAttribute('cname_from');
  }
  public set cnameFrom(value: string) {
    this._cnameFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameFromInput() {
    return this._cnameFrom;
  }

  // cname_to - computed: false, optional: false, required: true
  private _cnameTo?: string; 
  public get cnameTo() {
    return this.getStringAttribute('cname_to');
  }
  public set cnameTo(value: string) {
    this._cnameTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameToInput() {
    return this._cnameTo;
  }

  // cname_type - computed: true, optional: true, required: false
  private _cnameType?: string; 
  public get cnameType() {
    return this.getStringAttribute('cname_type');
  }
  public set cnameType(value: string) {
    this._cnameType = value;
  }
  public resetCnameType() {
    this._cnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameTypeInput() {
    return this._cnameType;
  }

  // edge_hostname_id - computed: true, optional: false, required: false
  public get edgeHostnameId() {
    return this.getStringAttribute('edge_hostname_id');
  }

  // cert_status - computed: false, optional: true, required: false
  private _certStatus = new PropertyHostnamesCertStatusList(this, "cert_status", false);
  public get certStatus() {
    return this._certStatus;
  }
  public putCertStatus(value: PropertyHostnamesCertStatus[] | cdktf.IResolvable) {
    this._certStatus.internalValue = value;
  }
  public resetCertStatus() {
    this._certStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusInput() {
    return this._certStatus.internalValue;
  }
}

export class PropertyHostnamesList extends cdktf.ComplexList {
  public internalValue? : PropertyHostnames[] | cdktf.IResolvable

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
  public get(index: number): PropertyHostnamesOutputReference {
    return new PropertyHostnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property akamai_property}
*/
export class Property extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Property resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Property to import
  * @param importFromId The id of the existing Property that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Property to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property akamai_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._productId = config.productId;
    this._propertyId = config.propertyId;
    this._ruleFormat = config.ruleFormat;
    this._rules = config.rules;
    this._useHostnameBucket = config.useHostnameBucket;
    this._versionNotes = config.versionNotes;
    this._hostnames.internalValue = config.hostnames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
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

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // production_version - computed: true, optional: false, required: false
  public get productionVersion() {
    return this.getNumberAttribute('production_version');
  }

  // property_id - computed: false, optional: true, required: false
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // read_version - computed: true, optional: false, required: false
  public get readVersion() {
    return this.getNumberAttribute('read_version');
  }

  // rule_errors - computed: true, optional: false, required: false
  private _ruleErrors = new PropertyRuleErrorsList(this, "rule_errors", false);
  public get ruleErrors() {
    return this._ruleErrors;
  }

  // rule_format - computed: true, optional: true, required: false
  private _ruleFormat?: string; 
  public get ruleFormat() {
    return this.getStringAttribute('rule_format');
  }
  public set ruleFormat(value: string) {
    this._ruleFormat = value;
  }
  public resetRuleFormat() {
    this._ruleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleFormatInput() {
    return this._ruleFormat;
  }

  // rule_warnings - computed: true, optional: false, required: false
  private _ruleWarnings = new PropertyRuleWarningsList(this, "rule_warnings", false);
  public get ruleWarnings() {
    return this._ruleWarnings;
  }

  // rules - computed: true, optional: true, required: false
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // staging_version - computed: true, optional: false, required: false
  public get stagingVersion() {
    return this.getNumberAttribute('staging_version');
  }

  // use_hostname_bucket - computed: false, optional: true, required: false
  private _useHostnameBucket?: boolean | cdktf.IResolvable; 
  public get useHostnameBucket() {
    return this.getBooleanAttribute('use_hostname_bucket');
  }
  public set useHostnameBucket(value: boolean | cdktf.IResolvable) {
    this._useHostnameBucket = value;
  }
  public resetUseHostnameBucket() {
    this._useHostnameBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostnameBucketInput() {
    return this._useHostnameBucket;
  }

  // version_notes - computed: true, optional: true, required: false
  private _versionNotes?: string; 
  public get versionNotes() {
    return this.getStringAttribute('version_notes');
  }
  public set versionNotes(value: string) {
    this._versionNotes = value;
  }
  public resetVersionNotes() {
    this._versionNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNotesInput() {
    return this._versionNotes;
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames = new PropertyHostnamesList(this, "hostnames", true);
  public get hostnames() {
    return this._hostnames;
  }
  public putHostnames(value: PropertyHostnames[] | cdktf.IResolvable) {
    this._hostnames.internalValue = value;
  }
  public resetHostnames() {
    this._hostnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
      property_id: cdktf.stringToTerraform(this._propertyId),
      rule_format: cdktf.stringToTerraform(this._ruleFormat),
      rules: cdktf.stringToTerraform(this._rules),
      use_hostname_bucket: cdktf.booleanToTerraform(this._useHostnameBucket),
      version_notes: cdktf.stringToTerraform(this._versionNotes),
      hostnames: cdktf.listMapper(propertyHostnamesToTerraform, true)(this._hostnames.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_id: {
        value: cdktf.stringToHclTerraform(this._propertyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_format: {
        value: cdktf.stringToHclTerraform(this._ruleFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_hostname_bucket: {
        value: cdktf.booleanToHclTerraform(this._useHostnameBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_notes: {
        value: cdktf.stringToHclTerraform(this._versionNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostnames: {
        value: cdktf.listMapperHcl(propertyHostnamesToHclTerraform, true)(this._hostnames.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PropertyHostnamesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
