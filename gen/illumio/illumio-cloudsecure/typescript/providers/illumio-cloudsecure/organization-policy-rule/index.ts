// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take for flows matched by the organization policy rule. Must be `"Allow"`, `"Deny"` or `"OverrideDeny"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#action OrganizationPolicyRule#action}
  */
  readonly action: string;
  /**
  * Description of the organization policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#description OrganizationPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the organization policy rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#enabled OrganizationPolicyRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of IDs of IP lists to allow/deny traffic from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#from_ip_list_ids OrganizationPolicyRule#from_ip_list_ids}
  */
  readonly fromIpListIds?: string[];
  /**
  * List of CloudSecure labels of sources to allow/deny traffic from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#from_labels OrganizationPolicyRule#from_labels}
  */
  readonly fromLabels?: OrganizationPolicyRuleFromLabels[] | cdktf.IResolvable;
  /**
  * ID of the CloudSecure organization policy to contain this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#organization_policy_id OrganizationPolicyRule#organization_policy_id}
  */
  readonly organizationPolicyId: string;
  /**
  * List of IDs of IP lists to allow/deny traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#to_ip_list_ids OrganizationPolicyRule#to_ip_list_ids}
  */
  readonly toIpListIds?: string[];
  /**
  * List of CloudSecure labels of destinations to allow/deny traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#to_labels OrganizationPolicyRule#to_labels}
  */
  readonly toLabels?: OrganizationPolicyRuleToLabels[] | cdktf.IResolvable;
  /**
  * List of transport protocol ports to allow/deny traffic to. The `protocol` for each port must be `"TCP"` or `"UDP"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#to_port_ranges OrganizationPolicyRule#to_port_ranges}
  */
  readonly toPortRanges: OrganizationPolicyRuleToPortRanges[] | cdktf.IResolvable;
}
export interface OrganizationPolicyRuleFromLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#key OrganizationPolicyRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#value OrganizationPolicyRule#value}
  */
  readonly value?: string;
}

export function organizationPolicyRuleFromLabelsToTerraform(struct?: OrganizationPolicyRuleFromLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function organizationPolicyRuleFromLabelsToHclTerraform(struct?: OrganizationPolicyRuleFromLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationPolicyRuleFromLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationPolicyRuleFromLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationPolicyRuleFromLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OrganizationPolicyRuleFromLabelsList extends cdktf.ComplexList {
  public internalValue? : OrganizationPolicyRuleFromLabels[] | cdktf.IResolvable

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
  public get(index: number): OrganizationPolicyRuleFromLabelsOutputReference {
    return new OrganizationPolicyRuleFromLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationPolicyRuleToLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#key OrganizationPolicyRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#value OrganizationPolicyRule#value}
  */
  readonly value?: string;
}

export function organizationPolicyRuleToLabelsToTerraform(struct?: OrganizationPolicyRuleToLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function organizationPolicyRuleToLabelsToHclTerraform(struct?: OrganizationPolicyRuleToLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationPolicyRuleToLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationPolicyRuleToLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationPolicyRuleToLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OrganizationPolicyRuleToLabelsList extends cdktf.ComplexList {
  public internalValue? : OrganizationPolicyRuleToLabels[] | cdktf.IResolvable

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
  public get(index: number): OrganizationPolicyRuleToLabelsOutputReference {
    return new OrganizationPolicyRuleToLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationPolicyRuleToPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#from_port OrganizationPolicyRule#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#protocol OrganizationPolicyRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#to_port OrganizationPolicyRule#to_port}
  */
  readonly toPort: number;
}

export function organizationPolicyRuleToPortRangesToTerraform(struct?: OrganizationPolicyRuleToPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function organizationPolicyRuleToPortRangesToHclTerraform(struct?: OrganizationPolicyRuleToPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationPolicyRuleToPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationPolicyRuleToPortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationPolicyRuleToPortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class OrganizationPolicyRuleToPortRangesList extends cdktf.ComplexList {
  public internalValue? : OrganizationPolicyRuleToPortRanges[] | cdktf.IResolvable

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
  public get(index: number): OrganizationPolicyRuleToPortRangesOutputReference {
    return new OrganizationPolicyRuleToPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule illumio-cloudsecure_organization_policy_rule}
*/
export class OrganizationPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_organization_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPolicyRule to import
  * @param importFromId The id of the existing OrganizationPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_organization_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/organization_policy_rule illumio-cloudsecure_organization_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_organization_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fromIpListIds = config.fromIpListIds;
    this._fromLabels.internalValue = config.fromLabels;
    this._organizationPolicyId = config.organizationPolicyId;
    this._toIpListIds = config.toIpListIds;
    this._toLabels.internalValue = config.toLabels;
    this._toPortRanges.internalValue = config.toPortRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // from_ip_list_ids - computed: false, optional: true, required: false
  private _fromIpListIds?: string[]; 
  public get fromIpListIds() {
    return this.getListAttribute('from_ip_list_ids');
  }
  public set fromIpListIds(value: string[]) {
    this._fromIpListIds = value;
  }
  public resetFromIpListIds() {
    this._fromIpListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromIpListIdsInput() {
    return this._fromIpListIds;
  }

  // from_labels - computed: false, optional: true, required: false
  private _fromLabels = new OrganizationPolicyRuleFromLabelsList(this, "from_labels", false);
  public get fromLabels() {
    return this._fromLabels;
  }
  public putFromLabels(value: OrganizationPolicyRuleFromLabels[] | cdktf.IResolvable) {
    this._fromLabels.internalValue = value;
  }
  public resetFromLabels() {
    this._fromLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromLabelsInput() {
    return this._fromLabels.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_policy_id - computed: false, optional: false, required: true
  private _organizationPolicyId?: string; 
  public get organizationPolicyId() {
    return this.getStringAttribute('organization_policy_id');
  }
  public set organizationPolicyId(value: string) {
    this._organizationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationPolicyIdInput() {
    return this._organizationPolicyId;
  }

  // to_ip_list_ids - computed: false, optional: true, required: false
  private _toIpListIds?: string[]; 
  public get toIpListIds() {
    return this.getListAttribute('to_ip_list_ids');
  }
  public set toIpListIds(value: string[]) {
    this._toIpListIds = value;
  }
  public resetToIpListIds() {
    this._toIpListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toIpListIdsInput() {
    return this._toIpListIds;
  }

  // to_labels - computed: false, optional: true, required: false
  private _toLabels = new OrganizationPolicyRuleToLabelsList(this, "to_labels", false);
  public get toLabels() {
    return this._toLabels;
  }
  public putToLabels(value: OrganizationPolicyRuleToLabels[] | cdktf.IResolvable) {
    this._toLabels.internalValue = value;
  }
  public resetToLabels() {
    this._toLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toLabelsInput() {
    return this._toLabels.internalValue;
  }

  // to_port_ranges - computed: false, optional: false, required: true
  private _toPortRanges = new OrganizationPolicyRuleToPortRangesList(this, "to_port_ranges", false);
  public get toPortRanges() {
    return this._toPortRanges;
  }
  public putToPortRanges(value: OrganizationPolicyRuleToPortRanges[] | cdktf.IResolvable) {
    this._toPortRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortRangesInput() {
    return this._toPortRanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      from_ip_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fromIpListIds),
      from_labels: cdktf.listMapper(organizationPolicyRuleFromLabelsToTerraform, false)(this._fromLabels.internalValue),
      organization_policy_id: cdktf.stringToTerraform(this._organizationPolicyId),
      to_ip_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._toIpListIds),
      to_labels: cdktf.listMapper(organizationPolicyRuleToLabelsToTerraform, false)(this._toLabels.internalValue),
      to_port_ranges: cdktf.listMapper(organizationPolicyRuleToPortRangesToTerraform, false)(this._toPortRanges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from_ip_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fromIpListIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      from_labels: {
        value: cdktf.listMapperHcl(organizationPolicyRuleFromLabelsToHclTerraform, false)(this._fromLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationPolicyRuleFromLabelsList",
      },
      organization_policy_id: {
        value: cdktf.stringToHclTerraform(this._organizationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_ip_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._toIpListIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to_labels: {
        value: cdktf.listMapperHcl(organizationPolicyRuleToLabelsToHclTerraform, false)(this._toLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationPolicyRuleToLabelsList",
      },
      to_port_ranges: {
        value: cdktf.listMapperHcl(organizationPolicyRuleToPortRangesToHclTerraform, false)(this._toPortRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationPolicyRuleToPortRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
