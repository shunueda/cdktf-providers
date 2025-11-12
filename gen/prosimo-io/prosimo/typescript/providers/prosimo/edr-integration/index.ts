// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdrIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#id EdrIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * crowdstrike block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#crowdstrike EdrIntegration#crowdstrike}
  */
  readonly crowdstrike: EdrIntegrationCrowdstrike[] | cdktf.IResolvable;
}
export interface EdrIntegrationCrowdstrikeCriteriaZtaScore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#from EdrIntegration#from}
  */
  readonly from: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#to EdrIntegration#to}
  */
  readonly to: number;
}

export function edrIntegrationCrowdstrikeCriteriaZtaScoreToTerraform(struct?: EdrIntegrationCrowdstrikeCriteriaZtaScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function edrIntegrationCrowdstrikeCriteriaZtaScoreToHclTerraform(struct?: EdrIntegrationCrowdstrikeCriteriaZtaScore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdrIntegrationCrowdstrikeCriteriaZtaScoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdrIntegrationCrowdstrikeCriteriaZtaScore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdrIntegrationCrowdstrikeCriteriaZtaScore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class EdrIntegrationCrowdstrikeCriteriaZtaScoreList extends cdktf.ComplexList {
  public internalValue? : EdrIntegrationCrowdstrikeCriteriaZtaScore[] | cdktf.IResolvable

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
  public get(index: number): EdrIntegrationCrowdstrikeCriteriaZtaScoreOutputReference {
    return new EdrIntegrationCrowdstrikeCriteriaZtaScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdrIntegrationCrowdstrikeCriteria {
  /**
  * Activate sensor, e.g: enabled, disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#sensor_active EdrIntegration#sensor_active}
  */
  readonly sensorActive: string;
  /**
  * Status, e.g: enabled, disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#status EdrIntegration#status}
  */
  readonly status: string;
  /**
  * zta_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#zta_score EdrIntegration#zta_score}
  */
  readonly ztaScore: EdrIntegrationCrowdstrikeCriteriaZtaScore[] | cdktf.IResolvable;
}

export function edrIntegrationCrowdstrikeCriteriaToTerraform(struct?: EdrIntegrationCrowdstrikeCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensor_active: cdktf.stringToTerraform(struct!.sensorActive),
    status: cdktf.stringToTerraform(struct!.status),
    zta_score: cdktf.listMapper(edrIntegrationCrowdstrikeCriteriaZtaScoreToTerraform, true)(struct!.ztaScore),
  }
}


export function edrIntegrationCrowdstrikeCriteriaToHclTerraform(struct?: EdrIntegrationCrowdstrikeCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensor_active: {
      value: cdktf.stringToHclTerraform(struct!.sensorActive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zta_score: {
      value: cdktf.listMapperHcl(edrIntegrationCrowdstrikeCriteriaZtaScoreToHclTerraform, true)(struct!.ztaScore),
      isBlock: true,
      type: "set",
      storageClassType: "EdrIntegrationCrowdstrikeCriteriaZtaScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdrIntegrationCrowdstrikeCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdrIntegrationCrowdstrikeCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensorActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensorActive = this._sensorActive;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._ztaScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztaScore = this._ztaScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdrIntegrationCrowdstrikeCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensorActive = undefined;
      this._status = undefined;
      this._ztaScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensorActive = value.sensorActive;
      this._status = value.status;
      this._ztaScore.internalValue = value.ztaScore;
    }
  }

  // sensor_active - computed: false, optional: false, required: true
  private _sensorActive?: string; 
  public get sensorActive() {
    return this.getStringAttribute('sensor_active');
  }
  public set sensorActive(value: string) {
    this._sensorActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorActiveInput() {
    return this._sensorActive;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // zta_score - computed: false, optional: false, required: true
  private _ztaScore = new EdrIntegrationCrowdstrikeCriteriaZtaScoreList(this, "zta_score", true);
  public get ztaScore() {
    return this._ztaScore;
  }
  public putZtaScore(value: EdrIntegrationCrowdstrikeCriteriaZtaScore[] | cdktf.IResolvable) {
    this._ztaScore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ztaScoreInput() {
    return this._ztaScore.internalValue;
  }
}

export class EdrIntegrationCrowdstrikeCriteriaList extends cdktf.ComplexList {
  public internalValue? : EdrIntegrationCrowdstrikeCriteria[] | cdktf.IResolvable

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
  public get(index: number): EdrIntegrationCrowdstrikeCriteriaOutputReference {
    return new EdrIntegrationCrowdstrikeCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdrIntegrationCrowdstrike {
  /**
  * Endpoint Security Integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#name EdrIntegration#name}
  */
  readonly name: string;
  /**
  * Select EDR Vendor, for now only CrowdStrike is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#vendor EdrIntegration#vendor}
  */
  readonly vendor: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#criteria EdrIntegration#criteria}
  */
  readonly criteria: EdrIntegrationCrowdstrikeCriteria[] | cdktf.IResolvable;
}

export function edrIntegrationCrowdstrikeToTerraform(struct?: EdrIntegrationCrowdstrike | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    criteria: cdktf.listMapper(edrIntegrationCrowdstrikeCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function edrIntegrationCrowdstrikeToHclTerraform(struct?: EdrIntegrationCrowdstrike | cdktf.IResolvable): any {
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
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.listMapperHcl(edrIntegrationCrowdstrikeCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "EdrIntegrationCrowdstrikeCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdrIntegrationCrowdstrikeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdrIntegrationCrowdstrike | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdrIntegrationCrowdstrike | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vendor = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vendor = value.vendor;
      this._criteria.internalValue = value.criteria;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new EdrIntegrationCrowdstrikeCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EdrIntegrationCrowdstrikeCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class EdrIntegrationCrowdstrikeList extends cdktf.ComplexList {
  public internalValue? : EdrIntegrationCrowdstrike[] | cdktf.IResolvable

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
  public get(index: number): EdrIntegrationCrowdstrikeOutputReference {
    return new EdrIntegrationCrowdstrikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration prosimo_edr_integration}
*/
export class EdrIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_edr_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdrIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdrIntegration to import
  * @param importFromId The id of the existing EdrIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdrIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_edr_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edr_integration prosimo_edr_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdrIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: EdrIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_edr_integration',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._crowdstrike.internalValue = config.crowdstrike;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // crowdstrike - computed: false, optional: false, required: true
  private _crowdstrike = new EdrIntegrationCrowdstrikeList(this, "crowdstrike", false);
  public get crowdstrike() {
    return this._crowdstrike;
  }
  public putCrowdstrike(value: EdrIntegrationCrowdstrike[] | cdktf.IResolvable) {
    this._crowdstrike.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeInput() {
    return this._crowdstrike.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      crowdstrike: cdktf.listMapper(edrIntegrationCrowdstrikeToTerraform, true)(this._crowdstrike.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crowdstrike: {
        value: cdktf.listMapperHcl(edrIntegrationCrowdstrikeToHclTerraform, true)(this._crowdstrike.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdrIntegrationCrowdstrikeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
