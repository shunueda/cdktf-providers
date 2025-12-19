// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CwpLicenseBindAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#id CwpLicenseBindAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * License ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#license_id CwpLicenseBindAttachment#license_id}
  */
  readonly licenseId: number;
  /**
  * LicenseType, 0 CWP Pro - Pay as you go, 1 CWP Pro - Monthly subscription, 2 CWP Ultimate - Monthly subscription. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#license_type CwpLicenseBindAttachment#license_type}
  */
  readonly licenseType: number;
  /**
  * Machine quota that needs to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#quuid CwpLicenseBindAttachment#quuid}
  */
  readonly quuid: string;
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#resource_id CwpLicenseBindAttachment#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment tencentcloud_cwp_license_bind_attachment}
*/
export class CwpLicenseBindAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cwp_license_bind_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CwpLicenseBindAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CwpLicenseBindAttachment to import
  * @param importFromId The id of the existing CwpLicenseBindAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CwpLicenseBindAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cwp_license_bind_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cwp_license_bind_attachment tencentcloud_cwp_license_bind_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CwpLicenseBindAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CwpLicenseBindAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cwp_license_bind_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._licenseId = config.licenseId;
    this._licenseType = config.licenseType;
    this._quuid = config.quuid;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
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

  // is_switch_bind - computed: true, optional: false, required: false
  public get isSwitchBind() {
    return this.getBooleanAttribute('is_switch_bind');
  }

  // is_unbind - computed: true, optional: false, required: false
  public get isUnbind() {
    return this.getBooleanAttribute('is_unbind');
  }

  // license_id - computed: false, optional: false, required: true
  private _licenseId?: number; 
  public get licenseId() {
    return this.getNumberAttribute('license_id');
  }
  public set licenseId(value: number) {
    this._licenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: number; 
  public get licenseType() {
    return this.getNumberAttribute('license_type');
  }
  public set licenseType(value: number) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // machine_ip - computed: true, optional: false, required: false
  public get machineIp() {
    return this.getStringAttribute('machine_ip');
  }

  // machine_name - computed: true, optional: false, required: false
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }

  // machine_wan_ip - computed: true, optional: false, required: false
  public get machineWanIp() {
    return this.getStringAttribute('machine_wan_ip');
  }

  // quuid - computed: false, optional: false, required: true
  private _quuid?: string; 
  public get quuid() {
    return this.getStringAttribute('quuid');
  }
  public set quuid(value: string) {
    this._quuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quuidInput() {
    return this._quuid;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      license_id: cdktf.numberToTerraform(this._licenseId),
      license_type: cdktf.numberToTerraform(this._licenseType),
      quuid: cdktf.stringToTerraform(this._quuid),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      license_id: {
        value: cdktf.numberToHclTerraform(this._licenseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license_type: {
        value: cdktf.numberToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quuid: {
        value: cdktf.stringToHclTerraform(this._quuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
