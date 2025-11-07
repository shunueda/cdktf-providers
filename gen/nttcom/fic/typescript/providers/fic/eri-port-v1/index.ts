// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriPortV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#id EriPortV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#is_activated EriPortV1#is_activated}
  */
  readonly isActivated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#name EriPortV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#number_of_vlans EriPortV1#number_of_vlans}
  */
  readonly numberOfVlans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#port_type EriPortV1#port_type}
  */
  readonly portType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#switch_name EriPortV1#switch_name}
  */
  readonly switchName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#timeouts EriPortV1#timeouts}
  */
  readonly timeouts?: EriPortV1Timeouts;
  /**
  * vlan_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#vlan_ranges EriPortV1#vlan_ranges}
  */
  readonly vlanRanges?: EriPortV1VlanRanges[] | cdktf.IResolvable;
}
export interface EriPortV1Vlans {
}

export function eriPortV1VlansToTerraform(struct?: EriPortV1Vlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eriPortV1VlansToHclTerraform(struct?: EriPortV1Vlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EriPortV1VlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriPortV1Vlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriPortV1Vlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vid - computed: true, optional: false, required: false
  public get vid() {
    return this.getNumberAttribute('vid');
  }
}

export class EriPortV1VlansList extends cdktf.ComplexList {

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
  public get(index: number): EriPortV1VlansOutputReference {
    return new EriPortV1VlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EriPortV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#create EriPortV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#delete EriPortV1#delete}
  */
  readonly delete?: string;
}

export function eriPortV1TimeoutsToTerraform(struct?: EriPortV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriPortV1TimeoutsToHclTerraform(struct?: EriPortV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriPortV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriPortV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriPortV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface EriPortV1VlanRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#end EriPortV1#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#start EriPortV1#start}
  */
  readonly start: number;
}

export function eriPortV1VlanRangesToTerraform(struct?: EriPortV1VlanRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function eriPortV1VlanRangesToHclTerraform(struct?: EriPortV1VlanRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriPortV1VlanRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EriPortV1VlanRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriPortV1VlanRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class EriPortV1VlanRangesList extends cdktf.ComplexList {
  public internalValue? : EriPortV1VlanRanges[] | cdktf.IResolvable

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
  public get(index: number): EriPortV1VlanRangesOutputReference {
    return new EriPortV1VlanRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1 fic_eri_port_v1}
*/
export class EriPortV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_port_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriPortV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriPortV1 to import
  * @param importFromId The id of the existing EriPortV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriPortV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_port_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_v1 fic_eri_port_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriPortV1Config
  */
  public constructor(scope: Construct, id: string, config: EriPortV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_port_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6'
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
    this._isActivated = config.isActivated;
    this._name = config.name;
    this._numberOfVlans = config.numberOfVlans;
    this._portType = config.portType;
    this._switchName = config.switchName;
    this._timeouts.internalValue = config.timeouts;
    this._vlanRanges.internalValue = config.vlanRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
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

  // is_activated - computed: true, optional: true, required: false
  private _isActivated?: boolean | cdktf.IResolvable; 
  public get isActivated() {
    return this.getBooleanAttribute('is_activated');
  }
  public set isActivated(value: boolean | cdktf.IResolvable) {
    this._isActivated = value;
  }
  public resetIsActivated() {
    this._isActivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActivatedInput() {
    return this._isActivated;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // number_of_vlans - computed: false, optional: true, required: false
  private _numberOfVlans?: number; 
  public get numberOfVlans() {
    return this.getNumberAttribute('number_of_vlans');
  }
  public set numberOfVlans(value: number) {
    this._numberOfVlans = value;
  }
  public resetNumberOfVlans() {
    this._numberOfVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVlansInput() {
    return this._numberOfVlans;
  }

  // port_type - computed: true, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // switch_name - computed: false, optional: false, required: true
  private _switchName?: string; 
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }
  public set switchName(value: string) {
    this._switchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchNameInput() {
    return this._switchName;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vlans - computed: true, optional: false, required: false
  private _vlans = new EriPortV1VlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriPortV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriPortV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vlan_ranges - computed: false, optional: true, required: false
  private _vlanRanges = new EriPortV1VlanRangesList(this, "vlan_ranges", false);
  public get vlanRanges() {
    return this._vlanRanges;
  }
  public putVlanRanges(value: EriPortV1VlanRanges[] | cdktf.IResolvable) {
    this._vlanRanges.internalValue = value;
  }
  public resetVlanRanges() {
    this._vlanRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanRangesInput() {
    return this._vlanRanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_activated: cdktf.booleanToTerraform(this._isActivated),
      name: cdktf.stringToTerraform(this._name),
      number_of_vlans: cdktf.numberToTerraform(this._numberOfVlans),
      port_type: cdktf.stringToTerraform(this._portType),
      switch_name: cdktf.stringToTerraform(this._switchName),
      timeouts: eriPortV1TimeoutsToTerraform(this._timeouts.internalValue),
      vlan_ranges: cdktf.listMapper(eriPortV1VlanRangesToTerraform, true)(this._vlanRanges.internalValue),
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
      is_activated: {
        value: cdktf.booleanToHclTerraform(this._isActivated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_vlans: {
        value: cdktf.numberToHclTerraform(this._numberOfVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_name: {
        value: cdktf.stringToHclTerraform(this._switchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: eriPortV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriPortV1Timeouts",
      },
      vlan_ranges: {
        value: cdktf.listMapperHcl(eriPortV1VlanRangesToHclTerraform, true)(this._vlanRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriPortV1VlanRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
