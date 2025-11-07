// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgWlanPortalImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * path to the background image file. File must be a `jpeg`, `jpg` or `png` image`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image#file OrgWlanPortalImage#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image#org_id OrgWlanPortalImage#org_id}
  */
  readonly orgId: string;
  /**
  * Org WLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image#wlan_id OrgWlanPortalImage#wlan_id}
  */
  readonly wlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image mist_org_wlan_portal_image}
*/
export class OrgWlanPortalImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_wlan_portal_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgWlanPortalImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgWlanPortalImage to import
  * @param importFromId The id of the existing OrgWlanPortalImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgWlanPortalImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_wlan_portal_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_wlan_portal_image mist_org_wlan_portal_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgWlanPortalImageConfig
  */
  public constructor(scope: Construct, id: string, config: OrgWlanPortalImageConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_wlan_portal_image',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._file = config.file;
    this._orgId = config.orgId;
    this._wlanId = config.wlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // wlan_id - computed: false, optional: false, required: true
  private _wlanId?: string; 
  public get wlanId() {
    return this.getStringAttribute('wlan_id');
  }
  public set wlanId(value: string) {
    this._wlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanIdInput() {
    return this._wlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.stringToTerraform(this._file),
      org_id: cdktf.stringToTerraform(this._orgId),
      wlan_id: cdktf.stringToTerraform(this._wlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wlan_id: {
        value: cdktf.stringToHclTerraform(this._wlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
