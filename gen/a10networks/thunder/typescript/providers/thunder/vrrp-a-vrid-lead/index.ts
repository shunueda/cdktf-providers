// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAVridLeadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#id VrrpAVridLead#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#user_tag VrrpAVridLead#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#uuid VrrpAVridLead#uuid}
  */
  readonly uuid?: string;
  /**
  * VRRP-A VRID leader name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#vrid_lead_str VrrpAVridLead#vrid_lead_str}
  */
  readonly vridLeadStr: string;
  /**
  * partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#partition VrrpAVridLead#partition}
  */
  readonly partition?: VrrpAVridLeadPartition;
}
export interface VrrpAVridLeadPartitionNameCfg {
  /**
  * Partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#name VrrpAVridLead#name}
  */
  readonly name?: string;
  /**
  * VRRP-A id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#vrid VrrpAVridLead#vrid}
  */
  readonly vrid?: number;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#vrid_value VrrpAVridLead#vrid_value}
  */
  readonly vridValue?: number;
}

export function vrrpAVridLeadPartitionNameCfgToTerraform(struct?: VrrpAVridLeadPartitionNameCfgOutputReference | VrrpAVridLeadPartitionNameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrid_value: cdktf.numberToTerraform(struct!.vridValue),
  }
}


export function vrrpAVridLeadPartitionNameCfgToHclTerraform(struct?: VrrpAVridLeadPartitionNameCfgOutputReference | VrrpAVridLeadPartitionNameCfg): any {
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
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_value: {
      value: cdktf.numberToHclTerraform(struct!.vridValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridLeadPartitionNameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridLeadPartitionNameCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vridValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridValue = this._vridValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridLeadPartitionNameCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._vrid = undefined;
      this._vridValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._vrid = value.vrid;
      this._vridValue = value.vridValue;
    }
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrid_value - computed: false, optional: true, required: false
  private _vridValue?: number; 
  public get vridValue() {
    return this.getNumberAttribute('vrid_value');
  }
  public set vridValue(value: number) {
    this._vridValue = value;
  }
  public resetVridValue() {
    this._vridValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValueInput() {
    return this._vridValue;
  }
}
export interface VrrpAVridLeadPartitionSharedCfg {
  /**
  * Shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#shared VrrpAVridLead#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#vrid VrrpAVridLead#vrid}
  */
  readonly vrid?: number;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#vrid_value VrrpAVridLead#vrid_value}
  */
  readonly vridValue?: number;
}

export function vrrpAVridLeadPartitionSharedCfgToTerraform(struct?: VrrpAVridLeadPartitionSharedCfgOutputReference | VrrpAVridLeadPartitionSharedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared: cdktf.numberToTerraform(struct!.shared),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrid_value: cdktf.numberToTerraform(struct!.vridValue),
  }
}


export function vrrpAVridLeadPartitionSharedCfgToHclTerraform(struct?: VrrpAVridLeadPartitionSharedCfgOutputReference | VrrpAVridLeadPartitionSharedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_value: {
      value: cdktf.numberToHclTerraform(struct!.vridValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridLeadPartitionSharedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridLeadPartitionSharedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vridValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridValue = this._vridValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridLeadPartitionSharedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shared = undefined;
      this._vrid = undefined;
      this._vridValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shared = value.shared;
      this._vrid = value.vrid;
      this._vridValue = value.vridValue;
    }
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrid_value - computed: false, optional: true, required: false
  private _vridValue?: number; 
  public get vridValue() {
    return this.getNumberAttribute('vrid_value');
  }
  public set vridValue(value: number) {
    this._vridValue = value;
  }
  public resetVridValue() {
    this._vridValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValueInput() {
    return this._vridValue;
  }
}
export interface VrrpAVridLeadPartition {
  /**
  * Partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#partition VrrpAVridLead#partition}
  */
  readonly partition?: number;
  /**
  * name_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#name_cfg VrrpAVridLead#name_cfg}
  */
  readonly nameCfg?: VrrpAVridLeadPartitionNameCfg;
  /**
  * shared_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#shared_cfg VrrpAVridLead#shared_cfg}
  */
  readonly sharedCfg?: VrrpAVridLeadPartitionSharedCfg;
}

export function vrrpAVridLeadPartitionToTerraform(struct?: VrrpAVridLeadPartitionOutputReference | VrrpAVridLeadPartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition: cdktf.numberToTerraform(struct!.partition),
    name_cfg: vrrpAVridLeadPartitionNameCfgToTerraform(struct!.nameCfg),
    shared_cfg: vrrpAVridLeadPartitionSharedCfgToTerraform(struct!.sharedCfg),
  }
}


export function vrrpAVridLeadPartitionToHclTerraform(struct?: VrrpAVridLeadPartitionOutputReference | VrrpAVridLeadPartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_cfg: {
      value: vrrpAVridLeadPartitionNameCfgToHclTerraform(struct!.nameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridLeadPartitionNameCfgList",
    },
    shared_cfg: {
      value: vrrpAVridLeadPartitionSharedCfgToHclTerraform(struct!.sharedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridLeadPartitionSharedCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridLeadPartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridLeadPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._nameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameCfg = this._nameCfg?.internalValue;
    }
    if (this._sharedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedCfg = this._sharedCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridLeadPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partition = undefined;
      this._nameCfg.internalValue = undefined;
      this._sharedCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partition = value.partition;
      this._nameCfg.internalValue = value.nameCfg;
      this._sharedCfg.internalValue = value.sharedCfg;
    }
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // name_cfg - computed: false, optional: true, required: false
  private _nameCfg = new VrrpAVridLeadPartitionNameCfgOutputReference(this, "name_cfg");
  public get nameCfg() {
    return this._nameCfg;
  }
  public putNameCfg(value: VrrpAVridLeadPartitionNameCfg) {
    this._nameCfg.internalValue = value;
  }
  public resetNameCfg() {
    this._nameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameCfgInput() {
    return this._nameCfg.internalValue;
  }

  // shared_cfg - computed: false, optional: true, required: false
  private _sharedCfg = new VrrpAVridLeadPartitionSharedCfgOutputReference(this, "shared_cfg");
  public get sharedCfg() {
    return this._sharedCfg;
  }
  public putSharedCfg(value: VrrpAVridLeadPartitionSharedCfg) {
    this._sharedCfg.internalValue = value;
  }
  public resetSharedCfg() {
    this._sharedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCfgInput() {
    return this._sharedCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead thunder_vrrp_a_vrid_lead}
*/
export class VrrpAVridLead extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_lead";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAVridLead resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAVridLead to import
  * @param importFromId The id of the existing VrrpAVridLead that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAVridLead to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_lead", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_lead thunder_vrrp_a_vrid_lead} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAVridLeadConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAVridLeadConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_lead',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vridLeadStr = config.vridLeadStr;
    this._partition.internalValue = config.partition;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vrid_lead_str - computed: false, optional: false, required: true
  private _vridLeadStr?: string; 
  public get vridLeadStr() {
    return this.getStringAttribute('vrid_lead_str');
  }
  public set vridLeadStr(value: string) {
    this._vridLeadStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridLeadStrInput() {
    return this._vridLeadStr;
  }

  // partition - computed: false, optional: true, required: false
  private _partition = new VrrpAVridLeadPartitionOutputReference(this, "partition");
  public get partition() {
    return this._partition;
  }
  public putPartition(value: VrrpAVridLeadPartition) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_lead_str: cdktf.stringToTerraform(this._vridLeadStr),
      partition: vrrpAVridLeadPartitionToTerraform(this._partition.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      vrid_lead_str: {
        value: cdktf.stringToHclTerraform(this._vridLeadStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: vrrpAVridLeadPartitionToHclTerraform(this._partition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridLeadPartitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
