// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgDeviceprofileAssignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign#deviceprofile_id OrgDeviceprofileAssign#deviceprofile_id}
  */
  readonly deviceprofileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign#macs OrgDeviceprofileAssign#macs}
  */
  readonly macs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign#org_id OrgDeviceprofileAssign#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign mist_org_deviceprofile_assign}
*/
export class OrgDeviceprofileAssign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_deviceprofile_assign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgDeviceprofileAssign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgDeviceprofileAssign to import
  * @param importFromId The id of the existing OrgDeviceprofileAssign that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgDeviceprofileAssign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_deviceprofile_assign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_deviceprofile_assign mist_org_deviceprofile_assign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgDeviceprofileAssignConfig
  */
  public constructor(scope: Construct, id: string, config: OrgDeviceprofileAssignConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_deviceprofile_assign',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceprofileId = config.deviceprofileId;
    this._macs = config.macs;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deviceprofile_id - computed: false, optional: false, required: true
  private _deviceprofileId?: string; 
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }
  public set deviceprofileId(value: string) {
    this._deviceprofileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceprofileIdInput() {
    return this._deviceprofileId;
  }

  // macs - computed: false, optional: false, required: true
  private _macs?: string[]; 
  public get macs() {
    return cdktf.Fn.tolist(this.getListAttribute('macs'));
  }
  public set macs(value: string[]) {
    this._macs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macsInput() {
    return this._macs;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deviceprofile_id: cdktf.stringToTerraform(this._deviceprofileId),
      macs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macs),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deviceprofile_id: {
        value: cdktf.stringToHclTerraform(this._deviceprofileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
