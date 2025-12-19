// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomaticUpdateCheckNowAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'app-fw': Application Firewall; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel class list; 'central-cert-pin-list': Central updated cert pinning list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#feature_name AutomaticUpdateCheckNowA#feature_name}
  */
  readonly featureName?: string;
  /**
  * Get files from GLM Staging storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#from_staging_server AutomaticUpdateCheckNowA#from_staging_server}
  */
  readonly fromStagingServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#id AutomaticUpdateCheckNowA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * update to this specific version, if this option is not configured, update to the latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#prod_ver AutomaticUpdateCheckNowA#prod_ver}
  */
  readonly prodVer?: string;
  /**
  * update this specific version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#stage_ver AutomaticUpdateCheckNowA#stage_ver}
  */
  readonly stageVer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now thunder_automatic_update_check_now}
*/
export class AutomaticUpdateCheckNowA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_automatic_update_check_now";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomaticUpdateCheckNowA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomaticUpdateCheckNowA to import
  * @param importFromId The id of the existing AutomaticUpdateCheckNowA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomaticUpdateCheckNowA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_automatic_update_check_now", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update_check_now thunder_automatic_update_check_now} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomaticUpdateCheckNowAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutomaticUpdateCheckNowAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_automatic_update_check_now',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureName = config.featureName;
    this._fromStagingServer = config.fromStagingServer;
    this._id = config.id;
    this._prodVer = config.prodVer;
    this._stageVer = config.stageVer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // from_staging_server - computed: false, optional: true, required: false
  private _fromStagingServer?: number; 
  public get fromStagingServer() {
    return this.getNumberAttribute('from_staging_server');
  }
  public set fromStagingServer(value: number) {
    this._fromStagingServer = value;
  }
  public resetFromStagingServer() {
    this._fromStagingServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStagingServerInput() {
    return this._fromStagingServer;
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

  // prod_ver - computed: false, optional: true, required: false
  private _prodVer?: string; 
  public get prodVer() {
    return this.getStringAttribute('prod_ver');
  }
  public set prodVer(value: string) {
    this._prodVer = value;
  }
  public resetProdVer() {
    this._prodVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prodVerInput() {
    return this._prodVer;
  }

  // stage_ver - computed: false, optional: true, required: false
  private _stageVer?: string; 
  public get stageVer() {
    return this.getStringAttribute('stage_ver');
  }
  public set stageVer(value: string) {
    this._stageVer = value;
  }
  public resetStageVer() {
    this._stageVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVerInput() {
    return this._stageVer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_name: cdktf.stringToTerraform(this._featureName),
      from_staging_server: cdktf.numberToTerraform(this._fromStagingServer),
      id: cdktf.stringToTerraform(this._id),
      prod_ver: cdktf.stringToTerraform(this._prodVer),
      stage_ver: cdktf.stringToTerraform(this._stageVer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_staging_server: {
        value: cdktf.numberToHclTerraform(this._fromStagingServer),
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
      prod_ver: {
        value: cdktf.stringToHclTerraform(this._prodVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_ver: {
        value: cdktf.stringToHclTerraform(this._stageVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
