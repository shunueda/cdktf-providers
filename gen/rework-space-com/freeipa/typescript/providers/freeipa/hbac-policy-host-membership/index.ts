// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbacPolicyHostMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * **deprecated** Host to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#host HbacPolicyHostMembership#host}
  */
  readonly host?: string;
  /**
  * **deprecated** Hostgroup to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#hostgroup HbacPolicyHostMembership#hostgroup}
  */
  readonly hostgroup?: string;
  /**
  * List of hostgroups to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#hostgroups HbacPolicyHostMembership#hostgroups}
  */
  readonly hostgroups?: string[];
  /**
  * List of hosts to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#hosts HbacPolicyHostMembership#hosts}
  */
  readonly hosts?: string[];
  /**
  * Unique identifier to differentiate multiple HBAC policy host membership resources on the same HBAC policy. Manadatory for using hosts/hostgroups configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#identifier HbacPolicyHostMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * HBAC policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#name HbacPolicyHostMembership#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership freeipa_hbac_policy_host_membership}
*/
export class HbacPolicyHostMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hbac_policy_host_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbacPolicyHostMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbacPolicyHostMembership to import
  * @param importFromId The id of the existing HbacPolicyHostMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbacPolicyHostMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hbac_policy_host_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_host_membership freeipa_hbac_policy_host_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbacPolicyHostMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: HbacPolicyHostMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hbac_policy_host_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.4',
        providerVersionConstraint: '5.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._hostgroup = config.hostgroup;
    this._hostgroups = config.hostgroups;
    this._hosts = config.hosts;
    this._identifier = config.identifier;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostgroup - computed: false, optional: true, required: false
  private _hostgroup?: string; 
  public get hostgroup() {
    return this.getStringAttribute('hostgroup');
  }
  public set hostgroup(value: string) {
    this._hostgroup = value;
  }
  public resetHostgroup() {
    this._hostgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostgroupInput() {
    return this._hostgroup;
  }

  // hostgroups - computed: false, optional: true, required: false
  private _hostgroups?: string[]; 
  public get hostgroups() {
    return this.getListAttribute('hostgroups');
  }
  public set hostgroups(value: string[]) {
    this._hostgroups = value;
  }
  public resetHostgroups() {
    this._hostgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostgroupsInput() {
    return this._hostgroups;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      hostgroup: cdktf.stringToTerraform(this._hostgroup),
      hostgroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostgroups),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostgroup: {
        value: cdktf.stringToHclTerraform(this._hostgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostgroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostgroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
