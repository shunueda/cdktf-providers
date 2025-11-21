// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbacPolicyServiceMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier to differentiate multiple HBAC policy service membership resources on the same HBAC policy. Manadatory for using services/servicegroups configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#identifier HbacPolicyServiceMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * HBAC policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#name HbacPolicyServiceMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** Service name the policy is applied t
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#service HbacPolicyServiceMembership#service}
  */
  readonly service?: string;
  /**
  * **deprecated** Service group name the policy is applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#servicegroup HbacPolicyServiceMembership#servicegroup}
  */
  readonly servicegroup?: string;
  /**
  * List of service group name the policy is applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#servicegroups HbacPolicyServiceMembership#servicegroups}
  */
  readonly servicegroups?: string[];
  /**
  * List of service name the policy is applied t
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#services HbacPolicyServiceMembership#services}
  */
  readonly services?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership freeipa_hbac_policy_service_membership}
*/
export class HbacPolicyServiceMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hbac_policy_service_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbacPolicyServiceMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbacPolicyServiceMembership to import
  * @param importFromId The id of the existing HbacPolicyServiceMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbacPolicyServiceMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hbac_policy_service_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy_service_membership freeipa_hbac_policy_service_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbacPolicyServiceMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: HbacPolicyServiceMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hbac_policy_service_membership',
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
    this._identifier = config.identifier;
    this._name = config.name;
    this._service = config.service;
    this._servicegroup = config.servicegroup;
    this._servicegroups = config.servicegroups;
    this._services = config.services;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // servicegroup - computed: false, optional: true, required: false
  private _servicegroup?: string; 
  public get servicegroup() {
    return this.getStringAttribute('servicegroup');
  }
  public set servicegroup(value: string) {
    this._servicegroup = value;
  }
  public resetServicegroup() {
    this._servicegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupInput() {
    return this._servicegroup;
  }

  // servicegroups - computed: false, optional: true, required: false
  private _servicegroups?: string[]; 
  public get servicegroups() {
    return this.getListAttribute('servicegroups');
  }
  public set servicegroups(value: string[]) {
    this._servicegroups = value;
  }
  public resetServicegroups() {
    this._servicegroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupsInput() {
    return this._servicegroups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      servicegroup: cdktf.stringToTerraform(this._servicegroup),
      servicegroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicegroups),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroup: {
        value: cdktf.stringToHclTerraform(this._servicegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servicegroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
