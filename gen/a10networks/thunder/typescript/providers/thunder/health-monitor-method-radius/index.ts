// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodRadiusAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#id HealthMonitorMethodRadiusA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#name HealthMonitorMethodRadiusA#name}
  */
  readonly name: string;
  /**
  * RADIUS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius HealthMonitorMethodRadiusA#radius}
  */
  readonly radius?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_expect HealthMonitorMethodRadiusA#radius_expect}
  */
  readonly radiusExpect?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_password_string HealthMonitorMethodRadiusA#radius_password_string}
  */
  readonly radiusPasswordString?: string;
  /**
  * Specify the RADIUS port, default is 1812 (Port number (default 1812))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_port HealthMonitorMethodRadiusA#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Specify response code range (e.g. 2,4-7) (Format is xx,xx-xx (xx between [1, 13]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_response_code HealthMonitorMethodRadiusA#radius_response_code}
  */
  readonly radiusResponseCode?: string;
  /**
  * Configure shared secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_secret HealthMonitorMethodRadiusA#radius_secret}
  */
  readonly radiusSecret?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#radius_username HealthMonitorMethodRadiusA#radius_username}
  */
  readonly radiusUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#uuid HealthMonitorMethodRadiusA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius thunder_health_monitor_method_radius}
*/
export class HealthMonitorMethodRadiusA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodRadiusA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodRadiusA to import
  * @param importFromId The id of the existing HealthMonitorMethodRadiusA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodRadiusA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_radius thunder_health_monitor_method_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodRadiusAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodRadiusAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_radius',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._radius = config.radius;
    this._radiusExpect = config.radiusExpect;
    this._radiusPasswordString = config.radiusPasswordString;
    this._radiusPort = config.radiusPort;
    this._radiusResponseCode = config.radiusResponseCode;
    this._radiusSecret = config.radiusSecret;
    this._radiusUsername = config.radiusUsername;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // radius - computed: false, optional: true, required: false
  private _radius?: number; 
  public get radius() {
    return this.getNumberAttribute('radius');
  }
  public set radius(value: number) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // radius_expect - computed: false, optional: true, required: false
  private _radiusExpect?: number; 
  public get radiusExpect() {
    return this.getNumberAttribute('radius_expect');
  }
  public set radiusExpect(value: number) {
    this._radiusExpect = value;
  }
  public resetRadiusExpect() {
    this._radiusExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusExpectInput() {
    return this._radiusExpect;
  }

  // radius_password_string - computed: false, optional: true, required: false
  private _radiusPasswordString?: string; 
  public get radiusPasswordString() {
    return this.getStringAttribute('radius_password_string');
  }
  public set radiusPasswordString(value: string) {
    this._radiusPasswordString = value;
  }
  public resetRadiusPasswordString() {
    this._radiusPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPasswordStringInput() {
    return this._radiusPasswordString;
  }

  // radius_port - computed: false, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radius_response_code - computed: false, optional: true, required: false
  private _radiusResponseCode?: string; 
  public get radiusResponseCode() {
    return this.getStringAttribute('radius_response_code');
  }
  public set radiusResponseCode(value: string) {
    this._radiusResponseCode = value;
  }
  public resetRadiusResponseCode() {
    this._radiusResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseCodeInput() {
    return this._radiusResponseCode;
  }

  // radius_secret - computed: false, optional: true, required: false
  private _radiusSecret?: string; 
  public get radiusSecret() {
    return this.getStringAttribute('radius_secret');
  }
  public set radiusSecret(value: string) {
    this._radiusSecret = value;
  }
  public resetRadiusSecret() {
    this._radiusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusSecretInput() {
    return this._radiusSecret;
  }

  // radius_username - computed: false, optional: true, required: false
  private _radiusUsername?: string; 
  public get radiusUsername() {
    return this.getStringAttribute('radius_username');
  }
  public set radiusUsername(value: string) {
    this._radiusUsername = value;
  }
  public resetRadiusUsername() {
    this._radiusUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusUsernameInput() {
    return this._radiusUsername;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      radius: cdktf.numberToTerraform(this._radius),
      radius_expect: cdktf.numberToTerraform(this._radiusExpect),
      radius_password_string: cdktf.stringToTerraform(this._radiusPasswordString),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      radius_response_code: cdktf.stringToTerraform(this._radiusResponseCode),
      radius_secret: cdktf.stringToTerraform(this._radiusSecret),
      radius_username: cdktf.stringToTerraform(this._radiusUsername),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius: {
        value: cdktf.numberToHclTerraform(this._radius),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_expect: {
        value: cdktf.numberToHclTerraform(this._radiusExpect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_password_string: {
        value: cdktf.stringToHclTerraform(this._radiusPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_response_code: {
        value: cdktf.stringToHclTerraform(this._radiusResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_secret: {
        value: cdktf.stringToHclTerraform(this._radiusSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_username: {
        value: cdktf.stringToHclTerraform(this._radiusUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
