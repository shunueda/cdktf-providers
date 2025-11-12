// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take for flows matched by the application policy rule. Must be `"Allow"`, `"Deny"` or `"OverrideDeny"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#action ApplicationPolicyRule#action}
  */
  readonly action: string;
  /**
  * ID of the CloudSecure application on which this rule is based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#application_id ApplicationPolicyRule#application_id}
  */
  readonly applicationId: string;
  /**
  * Description of the application policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#description ApplicationPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Specifies whether the application policy allow rule can be applied to scope outside the CloudSecure application. Applicable only for `"Allow"` action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#external_scope ApplicationPolicyRule#external_scope}
  */
  readonly externalScope?: boolean | cdktf.IResolvable;
  /**
  * List of IDs of IP lists to allow/deny traffic from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#from_ip_list_ids ApplicationPolicyRule#from_ip_list_ids}
  */
  readonly fromIpListIds?: string[];
  /**
  * List of Cloudsecure labels of sources to allow/deny traffic from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#from_labels ApplicationPolicyRule#from_labels}
  */
  readonly fromLabels?: ApplicationPolicyRuleFromLabels[] | cdktf.IResolvable;
  /**
  * List of IDs of IP lists to allow/deny traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#to_ip_list_ids ApplicationPolicyRule#to_ip_list_ids}
  */
  readonly toIpListIds?: string[];
  /**
  * List of Cloudsecure labels of destinations to allow/deny traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#to_labels ApplicationPolicyRule#to_labels}
  */
  readonly toLabels?: ApplicationPolicyRuleToLabels[] | cdktf.IResolvable;
  /**
  * List of transport protocol ports to allow/deny traffic to. The `protocol` for each port must be `"TCP"` or `"UDP"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#to_port_ranges ApplicationPolicyRule#to_port_ranges}
  */
  readonly toPortRanges: ApplicationPolicyRuleToPortRanges[] | cdktf.IResolvable;
}
export interface ApplicationPolicyRuleFromLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#key ApplicationPolicyRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#value ApplicationPolicyRule#value}
  */
  readonly value?: string;
}

export function applicationPolicyRuleFromLabelsToTerraform(struct?: ApplicationPolicyRuleFromLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationPolicyRuleFromLabelsToHclTerraform(struct?: ApplicationPolicyRuleFromLabels | cdktf.IResolvable): any {
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

export class ApplicationPolicyRuleFromLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPolicyRuleFromLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationPolicyRuleFromLabels | cdktf.IResolvable | undefined) {
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

export class ApplicationPolicyRuleFromLabelsList extends cdktf.ComplexList {
  public internalValue? : ApplicationPolicyRuleFromLabels[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPolicyRuleFromLabelsOutputReference {
    return new ApplicationPolicyRuleFromLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPolicyRuleToLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#key ApplicationPolicyRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#value ApplicationPolicyRule#value}
  */
  readonly value?: string;
}

export function applicationPolicyRuleToLabelsToTerraform(struct?: ApplicationPolicyRuleToLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationPolicyRuleToLabelsToHclTerraform(struct?: ApplicationPolicyRuleToLabels | cdktf.IResolvable): any {
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

export class ApplicationPolicyRuleToLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPolicyRuleToLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationPolicyRuleToLabels | cdktf.IResolvable | undefined) {
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

export class ApplicationPolicyRuleToLabelsList extends cdktf.ComplexList {
  public internalValue? : ApplicationPolicyRuleToLabels[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPolicyRuleToLabelsOutputReference {
    return new ApplicationPolicyRuleToLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPolicyRuleToPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#from_port ApplicationPolicyRule#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#protocol ApplicationPolicyRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#to_port ApplicationPolicyRule#to_port}
  */
  readonly toPort: number;
}

export function applicationPolicyRuleToPortRangesToTerraform(struct?: ApplicationPolicyRuleToPortRanges | cdktf.IResolvable): any {
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


export function applicationPolicyRuleToPortRangesToHclTerraform(struct?: ApplicationPolicyRuleToPortRanges | cdktf.IResolvable): any {
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

export class ApplicationPolicyRuleToPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPolicyRuleToPortRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationPolicyRuleToPortRanges | cdktf.IResolvable | undefined) {
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

export class ApplicationPolicyRuleToPortRangesList extends cdktf.ComplexList {
  public internalValue? : ApplicationPolicyRuleToPortRanges[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPolicyRuleToPortRangesOutputReference {
    return new ApplicationPolicyRuleToPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule illumio-cloudsecure_application_policy_rule}
*/
export class ApplicationPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_application_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationPolicyRule to import
  * @param importFromId The id of the existing ApplicationPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_application_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/application_policy_rule illumio-cloudsecure_application_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_application_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
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
    this._applicationId = config.applicationId;
    this._description = config.description;
    this._externalScope = config.externalScope;
    this._fromIpListIds = config.fromIpListIds;
    this._fromLabels.internalValue = config.fromLabels;
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // external_scope - computed: false, optional: true, required: false
  private _externalScope?: boolean | cdktf.IResolvable; 
  public get externalScope() {
    return this.getBooleanAttribute('external_scope');
  }
  public set externalScope(value: boolean | cdktf.IResolvable) {
    this._externalScope = value;
  }
  public resetExternalScope() {
    this._externalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalScopeInput() {
    return this._externalScope;
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
  private _fromLabels = new ApplicationPolicyRuleFromLabelsList(this, "from_labels", false);
  public get fromLabels() {
    return this._fromLabels;
  }
  public putFromLabels(value: ApplicationPolicyRuleFromLabels[] | cdktf.IResolvable) {
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
  private _toLabels = new ApplicationPolicyRuleToLabelsList(this, "to_labels", false);
  public get toLabels() {
    return this._toLabels;
  }
  public putToLabels(value: ApplicationPolicyRuleToLabels[] | cdktf.IResolvable) {
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
  private _toPortRanges = new ApplicationPolicyRuleToPortRangesList(this, "to_port_ranges", false);
  public get toPortRanges() {
    return this._toPortRanges;
  }
  public putToPortRanges(value: ApplicationPolicyRuleToPortRanges[] | cdktf.IResolvable) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      description: cdktf.stringToTerraform(this._description),
      external_scope: cdktf.booleanToTerraform(this._externalScope),
      from_ip_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fromIpListIds),
      from_labels: cdktf.listMapper(applicationPolicyRuleFromLabelsToTerraform, false)(this._fromLabels.internalValue),
      to_ip_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._toIpListIds),
      to_labels: cdktf.listMapper(applicationPolicyRuleToLabelsToTerraform, false)(this._toLabels.internalValue),
      to_port_ranges: cdktf.listMapper(applicationPolicyRuleToPortRangesToTerraform, false)(this._toPortRanges.internalValue),
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
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      external_scope: {
        value: cdktf.booleanToHclTerraform(this._externalScope),
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
        value: cdktf.listMapperHcl(applicationPolicyRuleFromLabelsToHclTerraform, false)(this._fromLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPolicyRuleFromLabelsList",
      },
      to_ip_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._toIpListIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to_labels: {
        value: cdktf.listMapperHcl(applicationPolicyRuleToLabelsToHclTerraform, false)(this._toLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPolicyRuleToLabelsList",
      },
      to_port_ranges: {
        value: cdktf.listMapperHcl(applicationPolicyRuleToPortRangesToHclTerraform, false)(this._toPortRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPolicyRuleToPortRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
