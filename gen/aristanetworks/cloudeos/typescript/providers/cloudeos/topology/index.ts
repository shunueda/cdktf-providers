// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TopologyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Range, a-b, of BGP ASN’s used for topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#bgp_asn Topology#bgp_asn}
  */
  readonly bgpAsn?: string;
  /**
  * Deployment type of the topology - provision or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#deploy_mode Topology#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * CIDR block for TerminAttr IPs on cloudeos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#dps_controlplane_cidr Topology#dps_controlplane_cidr}
  */
  readonly dpsControlplaneCidr?: string;
  /**
  * Existing cloudeos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#eos_managed Topology#eos_managed}
  */
  readonly eosManaged?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#id Topology#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Loopback IP range on cloudeos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#terminattr_ip_cidr Topology#terminattr_ip_cidr}
  */
  readonly terminattrIpCidr?: string;
  /**
  * Name of the base topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#topology_name Topology#topology_name}
  */
  readonly topologyName: string;
  /**
  * CIDR block for VTEP IPs on cloudeos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#vtep_ip_cidr Topology#vtep_ip_cidr}
  */
  readonly vtepIpCidr?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#timeouts Topology#timeouts}
  */
  readonly timeouts?: TopologyTimeouts;
}
export interface TopologyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#delete Topology#delete}
  */
  readonly delete?: string;
}

export function topologyTimeoutsToTerraform(struct?: TopologyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function topologyTimeoutsToHclTerraform(struct?: TopologyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class TopologyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TopologyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TopologyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology cloudeos_topology}
*/
export class Topology extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_topology";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Topology resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Topology to import
  * @param importFromId The id of the existing Topology that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Topology to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_topology", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/topology cloudeos_topology} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TopologyConfig
  */
  public constructor(scope: Construct, id: string, config: TopologyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_topology',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpAsn = config.bgpAsn;
    this._deployMode = config.deployMode;
    this._dpsControlplaneCidr = config.dpsControlplaneCidr;
    this._eosManaged = config.eosManaged;
    this._id = config.id;
    this._terminattrIpCidr = config.terminattrIpCidr;
    this._topologyName = config.topologyName;
    this._vtepIpCidr = config.vtepIpCidr;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_asn - computed: false, optional: true, required: false
  private _bgpAsn?: string; 
  public get bgpAsn() {
    return this.getStringAttribute('bgp_asn');
  }
  public set bgpAsn(value: string) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // dps_controlplane_cidr - computed: false, optional: true, required: false
  private _dpsControlplaneCidr?: string; 
  public get dpsControlplaneCidr() {
    return this.getStringAttribute('dps_controlplane_cidr');
  }
  public set dpsControlplaneCidr(value: string) {
    this._dpsControlplaneCidr = value;
  }
  public resetDpsControlplaneCidr() {
    this._dpsControlplaneCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpsControlplaneCidrInput() {
    return this._dpsControlplaneCidr;
  }

  // eos_managed - computed: false, optional: true, required: false
  private _eosManaged?: string[]; 
  public get eosManaged() {
    return cdktf.Fn.tolist(this.getListAttribute('eos_managed'));
  }
  public set eosManaged(value: string[]) {
    this._eosManaged = value;
  }
  public resetEosManaged() {
    this._eosManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eosManagedInput() {
    return this._eosManaged;
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

  // terminattr_ip_cidr - computed: false, optional: true, required: false
  private _terminattrIpCidr?: string; 
  public get terminattrIpCidr() {
    return this.getStringAttribute('terminattr_ip_cidr');
  }
  public set terminattrIpCidr(value: string) {
    this._terminattrIpCidr = value;
  }
  public resetTerminattrIpCidr() {
    this._terminattrIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminattrIpCidrInput() {
    return this._terminattrIpCidr;
  }

  // tf_id - computed: true, optional: false, required: false
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }

  // topology_name - computed: false, optional: false, required: true
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyNameInput() {
    return this._topologyName;
  }

  // vtep_ip_cidr - computed: false, optional: true, required: false
  private _vtepIpCidr?: string; 
  public get vtepIpCidr() {
    return this.getStringAttribute('vtep_ip_cidr');
  }
  public set vtepIpCidr(value: string) {
    this._vtepIpCidr = value;
  }
  public resetVtepIpCidr() {
    this._vtepIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepIpCidrInput() {
    return this._vtepIpCidr;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TopologyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TopologyTimeouts) {
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
      bgp_asn: cdktf.stringToTerraform(this._bgpAsn),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      dps_controlplane_cidr: cdktf.stringToTerraform(this._dpsControlplaneCidr),
      eos_managed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eosManaged),
      id: cdktf.stringToTerraform(this._id),
      terminattr_ip_cidr: cdktf.stringToTerraform(this._terminattrIpCidr),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      vtep_ip_cidr: cdktf.stringToTerraform(this._vtepIpCidr),
      timeouts: topologyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_asn: {
        value: cdktf.stringToHclTerraform(this._bgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dps_controlplane_cidr: {
        value: cdktf.stringToHclTerraform(this._dpsControlplaneCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eos_managed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eosManaged),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminattr_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._terminattrIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_name: {
        value: cdktf.stringToHclTerraform(this._topologyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtep_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._vtepIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: topologyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TopologyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
