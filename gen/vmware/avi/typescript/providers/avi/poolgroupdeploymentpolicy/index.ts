// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolgroupdeploymentpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#auto_disable_old_prod_pools Poolgroupdeploymentpolicy#auto_disable_old_prod_pools}
  */
  readonly autoDisableOldProdPools?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#description Poolgroupdeploymentpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#evaluation_duration Poolgroupdeploymentpolicy#evaluation_duration}
  */
  readonly evaluationDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#id Poolgroupdeploymentpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#name Poolgroupdeploymentpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#scheme Poolgroupdeploymentpolicy#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#target_test_traffic_ratio Poolgroupdeploymentpolicy#target_test_traffic_ratio}
  */
  readonly targetTestTrafficRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#tenant_ref Poolgroupdeploymentpolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#test_traffic_ratio_rampup Poolgroupdeploymentpolicy#test_traffic_ratio_rampup}
  */
  readonly testTrafficRatioRampup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#uuid Poolgroupdeploymentpolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#webhook_ref Poolgroupdeploymentpolicy#webhook_ref}
  */
  readonly webhookRef?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#configpb_attributes Poolgroupdeploymentpolicy#configpb_attributes}
  */
  readonly configpbAttributes?: PoolgroupdeploymentpolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#markers Poolgroupdeploymentpolicy#markers}
  */
  readonly markers?: PoolgroupdeploymentpolicyMarkers[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#rules Poolgroupdeploymentpolicy#rules}
  */
  readonly rules?: PoolgroupdeploymentpolicyRules[] | cdktf.IResolvable;
}
export interface PoolgroupdeploymentpolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#version Poolgroupdeploymentpolicy#version}
  */
  readonly version?: string;
}

export function poolgroupdeploymentpolicyConfigpbAttributesToTerraform(struct?: PoolgroupdeploymentpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function poolgroupdeploymentpolicyConfigpbAttributesToHclTerraform(struct?: PoolgroupdeploymentpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupdeploymentpolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupdeploymentpolicyConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupdeploymentpolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class PoolgroupdeploymentpolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : PoolgroupdeploymentpolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupdeploymentpolicyConfigpbAttributesOutputReference {
    return new PoolgroupdeploymentpolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupdeploymentpolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#key Poolgroupdeploymentpolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#values Poolgroupdeploymentpolicy#values}
  */
  readonly values?: string[];
}

export function poolgroupdeploymentpolicyMarkersToTerraform(struct?: PoolgroupdeploymentpolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function poolgroupdeploymentpolicyMarkersToHclTerraform(struct?: PoolgroupdeploymentpolicyMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupdeploymentpolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupdeploymentpolicyMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupdeploymentpolicyMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PoolgroupdeploymentpolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : PoolgroupdeploymentpolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupdeploymentpolicyMarkersOutputReference {
    return new PoolgroupdeploymentpolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupdeploymentpolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#metric_id Poolgroupdeploymentpolicy#metric_id}
  */
  readonly metricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#operator Poolgroupdeploymentpolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#threshold Poolgroupdeploymentpolicy#threshold}
  */
  readonly threshold?: string;
}

export function poolgroupdeploymentpolicyRulesToTerraform(struct?: PoolgroupdeploymentpolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function poolgroupdeploymentpolicyRulesToHclTerraform(struct?: PoolgroupdeploymentpolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupdeploymentpolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupdeploymentpolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupdeploymentpolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._operator = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._operator = value.operator;
      this._threshold = value.threshold;
    }
  }

  // metric_id - computed: false, optional: true, required: false
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  public resetMetricId() {
    this._metricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class PoolgroupdeploymentpolicyRulesList extends cdktf.ComplexList {
  public internalValue? : PoolgroupdeploymentpolicyRules[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupdeploymentpolicyRulesOutputReference {
    return new PoolgroupdeploymentpolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy avi_poolgroupdeploymentpolicy}
*/
export class Poolgroupdeploymentpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_poolgroupdeploymentpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Poolgroupdeploymentpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Poolgroupdeploymentpolicy to import
  * @param importFromId The id of the existing Poolgroupdeploymentpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Poolgroupdeploymentpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_poolgroupdeploymentpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/poolgroupdeploymentpolicy avi_poolgroupdeploymentpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolgroupdeploymentpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PoolgroupdeploymentpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_poolgroupdeploymentpolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDisableOldProdPools = config.autoDisableOldProdPools;
    this._description = config.description;
    this._evaluationDuration = config.evaluationDuration;
    this._id = config.id;
    this._name = config.name;
    this._scheme = config.scheme;
    this._targetTestTrafficRatio = config.targetTestTrafficRatio;
    this._tenantRef = config.tenantRef;
    this._testTrafficRatioRampup = config.testTrafficRatioRampup;
    this._uuid = config.uuid;
    this._webhookRef = config.webhookRef;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_disable_old_prod_pools - computed: false, optional: true, required: false
  private _autoDisableOldProdPools?: string; 
  public get autoDisableOldProdPools() {
    return this.getStringAttribute('auto_disable_old_prod_pools');
  }
  public set autoDisableOldProdPools(value: string) {
    this._autoDisableOldProdPools = value;
  }
  public resetAutoDisableOldProdPools() {
    this._autoDisableOldProdPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDisableOldProdPoolsInput() {
    return this._autoDisableOldProdPools;
  }

  // description - computed: true, optional: true, required: false
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

  // evaluation_duration - computed: false, optional: true, required: false
  private _evaluationDuration?: string; 
  public get evaluationDuration() {
    return this.getStringAttribute('evaluation_duration');
  }
  public set evaluationDuration(value: string) {
    this._evaluationDuration = value;
  }
  public resetEvaluationDuration() {
    this._evaluationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDurationInput() {
    return this._evaluationDuration;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // target_test_traffic_ratio - computed: false, optional: true, required: false
  private _targetTestTrafficRatio?: string; 
  public get targetTestTrafficRatio() {
    return this.getStringAttribute('target_test_traffic_ratio');
  }
  public set targetTestTrafficRatio(value: string) {
    this._targetTestTrafficRatio = value;
  }
  public resetTargetTestTrafficRatio() {
    this._targetTestTrafficRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTestTrafficRatioInput() {
    return this._targetTestTrafficRatio;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // test_traffic_ratio_rampup - computed: false, optional: true, required: false
  private _testTrafficRatioRampup?: string; 
  public get testTrafficRatioRampup() {
    return this.getStringAttribute('test_traffic_ratio_rampup');
  }
  public set testTrafficRatioRampup(value: string) {
    this._testTrafficRatioRampup = value;
  }
  public resetTestTrafficRatioRampup() {
    this._testTrafficRatioRampup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTrafficRatioRampupInput() {
    return this._testTrafficRatioRampup;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // webhook_ref - computed: true, optional: true, required: false
  private _webhookRef?: string; 
  public get webhookRef() {
    return this.getStringAttribute('webhook_ref');
  }
  public set webhookRef(value: string) {
    this._webhookRef = value;
  }
  public resetWebhookRef() {
    this._webhookRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookRefInput() {
    return this._webhookRef;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new PoolgroupdeploymentpolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: PoolgroupdeploymentpolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new PoolgroupdeploymentpolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: PoolgroupdeploymentpolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new PoolgroupdeploymentpolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: PoolgroupdeploymentpolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_disable_old_prod_pools: cdktf.stringToTerraform(this._autoDisableOldProdPools),
      description: cdktf.stringToTerraform(this._description),
      evaluation_duration: cdktf.stringToTerraform(this._evaluationDuration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scheme: cdktf.stringToTerraform(this._scheme),
      target_test_traffic_ratio: cdktf.stringToTerraform(this._targetTestTrafficRatio),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      test_traffic_ratio_rampup: cdktf.stringToTerraform(this._testTrafficRatioRampup),
      uuid: cdktf.stringToTerraform(this._uuid),
      webhook_ref: cdktf.stringToTerraform(this._webhookRef),
      configpb_attributes: cdktf.listMapper(poolgroupdeploymentpolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(poolgroupdeploymentpolicyMarkersToTerraform, true)(this._markers.internalValue),
      rules: cdktf.listMapper(poolgroupdeploymentpolicyRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_disable_old_prod_pools: {
        value: cdktf.stringToHclTerraform(this._autoDisableOldProdPools),
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
      evaluation_duration: {
        value: cdktf.stringToHclTerraform(this._evaluationDuration),
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
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_test_traffic_ratio: {
        value: cdktf.stringToHclTerraform(this._targetTestTrafficRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_traffic_ratio_rampup: {
        value: cdktf.stringToHclTerraform(this._testTrafficRatioRampup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_ref: {
        value: cdktf.stringToHclTerraform(this._webhookRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(poolgroupdeploymentpolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolgroupdeploymentpolicyConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(poolgroupdeploymentpolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolgroupdeploymentpolicyMarkersList",
      },
      rules: {
        value: cdktf.listMapperHcl(poolgroupdeploymentpolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolgroupdeploymentpolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
