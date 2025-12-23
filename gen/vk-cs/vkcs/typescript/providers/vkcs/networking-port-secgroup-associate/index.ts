// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingPortSecgroupAssociateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to replace or append the list of security groups, specified in the `security_group_ids`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#enforce NetworkingPortSecgroupAssociate#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#id NetworkingPortSecgroupAssociate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An UUID of the port to apply security groups to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#port_id NetworkingPortSecgroupAssociate#port_id}
  */
  readonly portId: string;
  /**
  * The region in which to obtain the networking client. A networking client is needed to manage a port. If omitted, the `region` argument of the provider is used. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#region NetworkingPortSecgroupAssociate#region}
  */
  readonly region?: string;
  /**
  * SDN to use for this resource. Must be one of following: "neutron", "sprut". Default value is project's default SDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#sdn NetworkingPortSecgroupAssociate#sdn}
  */
  readonly sdn?: string;
  /**
  * A list of security group IDs to apply to the port. The security groups must be specified by ID and not name (as opposed to how they are configured with the Compute Instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#security_group_ids NetworkingPortSecgroupAssociate#security_group_ids}
  */
  readonly securityGroupIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate vkcs_networking_port_secgroup_associate}
*/
export class NetworkingPortSecgroupAssociate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_networking_port_secgroup_associate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingPortSecgroupAssociate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingPortSecgroupAssociate to import
  * @param importFromId The id of the existing NetworkingPortSecgroupAssociate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingPortSecgroupAssociate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_networking_port_secgroup_associate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/resources/networking_port_secgroup_associate vkcs_networking_port_secgroup_associate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingPortSecgroupAssociateConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkingPortSecgroupAssociateConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_networking_port_secgroup_associate',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforce = config.enforce;
    this._id = config.id;
    this._portId = config.portId;
    this._region = config.region;
    this._sdn = config.sdn;
    this._securityGroupIds = config.securityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_security_group_ids - computed: true, optional: false, required: false
  public get allSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('all_security_group_ids'));
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
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

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdn - computed: true, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforce: cdktf.booleanToTerraform(this._enforce),
      id: cdktf.stringToTerraform(this._id),
      port_id: cdktf.stringToTerraform(this._portId),
      region: cdktf.stringToTerraform(this._region),
      sdn: cdktf.stringToTerraform(this._sdn),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforce: {
        value: cdktf.booleanToHclTerraform(this._enforce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn: {
        value: cdktf.stringToHclTerraform(this._sdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
