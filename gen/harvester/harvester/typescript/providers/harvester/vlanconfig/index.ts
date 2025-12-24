// https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * mgmt is a built-in cluster network and does not support creating/updating network configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#cluster_network_name Vlanconfig#cluster_network_name}
  */
  readonly clusterNetworkName: string;
  /**
  * Any text you want that better describes this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#description Vlanconfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#id Vlanconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#labels Vlanconfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#name Vlanconfig#name}
  */
  readonly name: string;
  /**
  * refer to https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#node_selector Vlanconfig#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#tags Vlanconfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#timeouts Vlanconfig#timeouts}
  */
  readonly timeouts?: VlanconfigTimeouts;
  /**
  * uplink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#uplink Vlanconfig#uplink}
  */
  readonly uplink: VlanconfigUplink;
}
export interface VlanconfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#create Vlanconfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#default Vlanconfig#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#delete Vlanconfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#read Vlanconfig#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#update Vlanconfig#update}
  */
  readonly update?: string;
}

export function vlanconfigTimeoutsToTerraform(struct?: VlanconfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vlanconfigTimeoutsToHclTerraform(struct?: VlanconfigTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanconfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanconfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanconfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface VlanconfigUplink {
  /**
  * refer to https://www.kernel.org/doc/Documentation/networking/bonding.txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#bond_miimon Vlanconfig#bond_miimon}
  */
  readonly bondMiimon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#bond_mode Vlanconfig#bond_mode}
  */
  readonly bondMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#mtu Vlanconfig#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#nics Vlanconfig#nics}
  */
  readonly nics: string[];
}

export function vlanconfigUplinkToTerraform(struct?: VlanconfigUplinkOutputReference | VlanconfigUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_miimon: cdktf.numberToTerraform(struct!.bondMiimon),
    bond_mode: cdktf.stringToTerraform(struct!.bondMode),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    nics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nics),
  }
}


export function vlanconfigUplinkToHclTerraform(struct?: VlanconfigUplinkOutputReference | VlanconfigUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_miimon: {
      value: cdktf.numberToHclTerraform(struct!.bondMiimon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bond_mode: {
      value: cdktf.stringToHclTerraform(struct!.bondMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VlanconfigUplinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VlanconfigUplink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondMiimon !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondMiimon = this._bondMiimon;
    }
    if (this._bondMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondMode = this._bondMode;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._nics !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VlanconfigUplink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondMiimon = undefined;
      this._bondMode = undefined;
      this._mtu = undefined;
      this._nics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondMiimon = value.bondMiimon;
      this._bondMode = value.bondMode;
      this._mtu = value.mtu;
      this._nics = value.nics;
    }
  }

  // bond_miimon - computed: false, optional: true, required: false
  private _bondMiimon?: number; 
  public get bondMiimon() {
    return this.getNumberAttribute('bond_miimon');
  }
  public set bondMiimon(value: number) {
    this._bondMiimon = value;
  }
  public resetBondMiimon() {
    this._bondMiimon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondMiimonInput() {
    return this._bondMiimon;
  }

  // bond_mode - computed: false, optional: true, required: false
  private _bondMode?: string; 
  public get bondMode() {
    return this.getStringAttribute('bond_mode');
  }
  public set bondMode(value: string) {
    this._bondMode = value;
  }
  public resetBondMode() {
    this._bondMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondModeInput() {
    return this._bondMode;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // nics - computed: false, optional: false, required: true
  private _nics?: string[]; 
  public get nics() {
    return this.getListAttribute('nics');
  }
  public set nics(value: string[]) {
    this._nics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig harvester_vlanconfig}
*/
export class Vlanconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harvester_vlanconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlanconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlanconfig to import
  * @param importFromId The id of the existing Vlanconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlanconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harvester_vlanconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harvester/harvester/1.7.0/docs/resources/vlanconfig harvester_vlanconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanconfigConfig
  */
  public constructor(scope: Construct, id: string, config: VlanconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'harvester_vlanconfig',
      terraformGeneratorMetadata: {
        providerName: 'harvester',
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
    this._clusterNetworkName = config.clusterNetworkName;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeSelector = config.nodeSelector;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._uplink.internalValue = config.uplink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_network_name - computed: false, optional: false, required: true
  private _clusterNetworkName?: string; 
  public get clusterNetworkName() {
    return this.getStringAttribute('cluster_network_name');
  }
  public set clusterNetworkName(value: string) {
    this._clusterNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkNameInput() {
    return this._clusterNetworkName;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // matched_nodes - computed: true, optional: false, required: false
  public get matchedNodes() {
    return this.getListAttribute('matched_nodes');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
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

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VlanconfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VlanconfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // uplink - computed: false, optional: false, required: true
  private _uplink = new VlanconfigUplinkOutputReference(this, "uplink");
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: VlanconfigUplink) {
    this._uplink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_network_name: cdktf.stringToTerraform(this._clusterNetworkName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeSelector),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: vlanconfigTimeoutsToTerraform(this._timeouts.internalValue),
      uplink: vlanconfigUplinkToTerraform(this._uplink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_network_name: {
        value: cdktf.stringToHclTerraform(this._clusterNetworkName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_selector: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeSelector),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: vlanconfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanconfigTimeouts",
      },
      uplink: {
        value: vlanconfigUplinkToHclTerraform(this._uplink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VlanconfigUplinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
