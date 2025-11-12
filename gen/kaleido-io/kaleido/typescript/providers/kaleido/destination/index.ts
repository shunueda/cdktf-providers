// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#auto_verify_membership Destination#auto_verify_membership}
  */
  readonly autoVerifyMembership?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#consortium_id Destination#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#idregistry_id Destination#idregistry_id}
  */
  readonly idregistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#kaleido_managed Destination#kaleido_managed}
  */
  readonly kaleidoManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#membership_id Destination#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#name Destination#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#service_id Destination#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#service_type Destination#service_type}
  */
  readonly serviceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination kaleido_destination}
*/
export class Destination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Destination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Destination to import
  * @param importFromId The id of the existing Destination that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Destination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/destination kaleido_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_destination',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVerifyMembership = config.autoVerifyMembership;
    this._consortiumId = config.consortiumId;
    this._idregistryId = config.idregistryId;
    this._kaleidoManaged = config.kaleidoManaged;
    this._membershipId = config.membershipId;
    this._name = config.name;
    this._serviceId = config.serviceId;
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_verify_membership - computed: true, optional: true, required: false
  private _autoVerifyMembership?: boolean | cdktf.IResolvable; 
  public get autoVerifyMembership() {
    return this.getBooleanAttribute('auto_verify_membership');
  }
  public set autoVerifyMembership(value: boolean | cdktf.IResolvable) {
    this._autoVerifyMembership = value;
  }
  public resetAutoVerifyMembership() {
    this._autoVerifyMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifyMembershipInput() {
    return this._autoVerifyMembership;
  }

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idregistry_id - computed: false, optional: true, required: false
  private _idregistryId?: string; 
  public get idregistryId() {
    return this.getStringAttribute('idregistry_id');
  }
  public set idregistryId(value: string) {
    this._idregistryId = value;
  }
  public resetIdregistryId() {
    this._idregistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idregistryIdInput() {
    return this._idregistryId;
  }

  // kaleido_managed - computed: true, optional: true, required: false
  private _kaleidoManaged?: boolean | cdktf.IResolvable; 
  public get kaleidoManaged() {
    return this.getBooleanAttribute('kaleido_managed');
  }
  public set kaleidoManaged(value: boolean | cdktf.IResolvable) {
    this._kaleidoManaged = value;
  }
  public resetKaleidoManaged() {
    this._kaleidoManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaleidoManagedInput() {
    return this._kaleidoManaged;
  }

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_verify_membership: cdktf.booleanToTerraform(this._autoVerifyMembership),
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      idregistry_id: cdktf.stringToTerraform(this._idregistryId),
      kaleido_managed: cdktf.booleanToTerraform(this._kaleidoManaged),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      name: cdktf.stringToTerraform(this._name),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_type: cdktf.stringToTerraform(this._serviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_verify_membership: {
        value: cdktf.booleanToHclTerraform(this._autoVerifyMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idregistry_id: {
        value: cdktf.stringToHclTerraform(this._idregistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kaleido_managed: {
        value: cdktf.booleanToHclTerraform(this._kaleidoManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      membership_id: {
        value: cdktf.stringToHclTerraform(this._membershipId),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
