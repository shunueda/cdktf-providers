// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFmgSasemanagerStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#adom ObjectFmgSasemanagerStatus#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#forticlient_ver ObjectFmgSasemanagerStatus#forticlient_ver}
  */
  readonly forticlientVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#forticloud_id ObjectFmgSasemanagerStatus#forticloud_id}
  */
  readonly forticloudId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#id ObjectFmgSasemanagerStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#license_type ObjectFmgSasemanagerStatus#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#scopetype ObjectFmgSasemanagerStatus#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#spa_hubs ObjectFmgSasemanagerStatus#spa_hubs}
  */
  readonly spaHubs?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status fortimanager_object_fmg_sasemanager_status}
*/
export class ObjectFmgSasemanagerStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fmg_sasemanager_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFmgSasemanagerStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFmgSasemanagerStatus to import
  * @param importFromId The id of the existing ObjectFmgSasemanagerStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFmgSasemanagerStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fmg_sasemanager_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_status fortimanager_object_fmg_sasemanager_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFmgSasemanagerStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFmgSasemanagerStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fmg_sasemanager_status',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._forticlientVer = config.forticlientVer;
    this._forticloudId = config.forticloudId;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._scopetype = config.scopetype;
    this._spaHubs = config.spaHubs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // forticlient_ver - computed: false, optional: true, required: false
  private _forticlientVer?: string; 
  public get forticlientVer() {
    return this.getStringAttribute('forticlient_ver');
  }
  public set forticlientVer(value: string) {
    this._forticlientVer = value;
  }
  public resetForticlientVer() {
    this._forticlientVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVerInput() {
    return this._forticlientVer;
  }

  // forticloud_id - computed: false, optional: true, required: false
  private _forticloudId?: number; 
  public get forticloudId() {
    return this.getNumberAttribute('forticloud_id');
  }
  public set forticloudId(value: number) {
    this._forticloudId = value;
  }
  public resetForticloudId() {
    this._forticloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticloudIdInput() {
    return this._forticloudId;
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

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // spa_hubs - computed: false, optional: true, required: false
  private _spaHubs?: number; 
  public get spaHubs() {
    return this.getNumberAttribute('spa_hubs');
  }
  public set spaHubs(value: number) {
    this._spaHubs = value;
  }
  public resetSpaHubs() {
    this._spaHubs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaHubsInput() {
    return this._spaHubs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      forticlient_ver: cdktf.stringToTerraform(this._forticlientVer),
      forticloud_id: cdktf.numberToTerraform(this._forticloudId),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      spa_hubs: cdktf.numberToTerraform(this._spaHubs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_ver: {
        value: cdktf.stringToHclTerraform(this._forticlientVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticloud_id: {
        value: cdktf.numberToHclTerraform(this._forticloudId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spa_hubs: {
        value: cdktf.numberToHclTerraform(this._spaHubs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
