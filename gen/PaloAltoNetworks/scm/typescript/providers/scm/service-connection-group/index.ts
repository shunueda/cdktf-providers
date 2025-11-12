// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConnectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable snat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group#disable_snat ServiceConnectionGroup#disable_snat}
  */
  readonly disableSnat?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group#name ServiceConnectionGroup#name}
  */
  readonly name: string;
  /**
  * Pbf only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group#pbf_only ServiceConnectionGroup#pbf_only}
  */
  readonly pbfOnly?: boolean | cdktf.IResolvable;
  /**
  * Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group#target ServiceConnectionGroup#target}
  */
  readonly target: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group scm_service_connection_group}
*/
export class ServiceConnectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_connection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceConnectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceConnectionGroup to import
  * @param importFromId The id of the existing ServiceConnectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceConnectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_connection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/service_connection_group scm_service_connection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConnectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConnectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_service_connection_group',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableSnat = config.disableSnat;
    this._name = config.name;
    this._pbfOnly = config.pbfOnly;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_snat - computed: false, optional: true, required: false
  private _disableSnat?: boolean | cdktf.IResolvable; 
  public get disableSnat() {
    return this.getBooleanAttribute('disable_snat');
  }
  public set disableSnat(value: boolean | cdktf.IResolvable) {
    this._disableSnat = value;
  }
  public resetDisableSnat() {
    this._disableSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnatInput() {
    return this._disableSnat;
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

  // pbf_only - computed: false, optional: true, required: false
  private _pbfOnly?: boolean | cdktf.IResolvable; 
  public get pbfOnly() {
    return this.getBooleanAttribute('pbf_only');
  }
  public set pbfOnly(value: boolean | cdktf.IResolvable) {
    this._pbfOnly = value;
  }
  public resetPbfOnly() {
    this._pbfOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbfOnlyInput() {
    return this._pbfOnly;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string[]; 
  public get target() {
    return this.getListAttribute('target');
  }
  public set target(value: string[]) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_snat: cdktf.booleanToTerraform(this._disableSnat),
      name: cdktf.stringToTerraform(this._name),
      pbf_only: cdktf.booleanToTerraform(this._pbfOnly),
      target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_snat: {
        value: cdktf.booleanToHclTerraform(this._disableSnat),
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
      pbf_only: {
        value: cdktf.booleanToHclTerraform(this._pbfOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._target),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
