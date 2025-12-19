// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationSamlMetadataMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify how many ACS continuous fails will trigger metadata reload (ACS continuous fail threshold (default: 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#acs_continuous_fail_threshold AamAuthenticationSamlMetadataMonitor#acs_continuous_fail_threshold}
  */
  readonly acsContinuousFailThreshold?: number;
  /**
  * Specify how long no acs request will trigger metadata reload (in seconds (default: 60))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#acs_missing_period AamAuthenticationSamlMetadataMonitor#acs_missing_period}
  */
  readonly acsMissingPeriod?: number;
  /**
  * Specify how many ACS request missing in the period will trigger metadata reload (ACS request missing threshold (default: 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#acs_missing_threshold AamAuthenticationSamlMetadataMonitor#acs_missing_threshold}
  */
  readonly acsMissingThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#id AamAuthenticationSamlMetadataMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable SAML metadata out-of-sync detection; 'disable': Disable SAML metadata out-of-sync detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#status AamAuthenticationSamlMetadataMonitor#status}
  */
  readonly status?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#uuid AamAuthenticationSamlMetadataMonitor#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor thunder_aam_authentication_saml_metadata_monitor}
*/
export class AamAuthenticationSamlMetadataMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_metadata_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationSamlMetadataMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationSamlMetadataMonitor to import
  * @param importFromId The id of the existing AamAuthenticationSamlMetadataMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationSamlMetadataMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_metadata_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_saml_metadata_monitor thunder_aam_authentication_saml_metadata_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationSamlMetadataMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationSamlMetadataMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_metadata_monitor',
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
    this._acsContinuousFailThreshold = config.acsContinuousFailThreshold;
    this._acsMissingPeriod = config.acsMissingPeriod;
    this._acsMissingThreshold = config.acsMissingThreshold;
    this._id = config.id;
    this._status = config.status;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_continuous_fail_threshold - computed: false, optional: true, required: false
  private _acsContinuousFailThreshold?: number; 
  public get acsContinuousFailThreshold() {
    return this.getNumberAttribute('acs_continuous_fail_threshold');
  }
  public set acsContinuousFailThreshold(value: number) {
    this._acsContinuousFailThreshold = value;
  }
  public resetAcsContinuousFailThreshold() {
    this._acsContinuousFailThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsContinuousFailThresholdInput() {
    return this._acsContinuousFailThreshold;
  }

  // acs_missing_period - computed: false, optional: true, required: false
  private _acsMissingPeriod?: number; 
  public get acsMissingPeriod() {
    return this.getNumberAttribute('acs_missing_period');
  }
  public set acsMissingPeriod(value: number) {
    this._acsMissingPeriod = value;
  }
  public resetAcsMissingPeriod() {
    this._acsMissingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsMissingPeriodInput() {
    return this._acsMissingPeriod;
  }

  // acs_missing_threshold - computed: false, optional: true, required: false
  private _acsMissingThreshold?: number; 
  public get acsMissingThreshold() {
    return this.getNumberAttribute('acs_missing_threshold');
  }
  public set acsMissingThreshold(value: number) {
    this._acsMissingThreshold = value;
  }
  public resetAcsMissingThreshold() {
    this._acsMissingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsMissingThresholdInput() {
    return this._acsMissingThreshold;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      acs_continuous_fail_threshold: cdktf.numberToTerraform(this._acsContinuousFailThreshold),
      acs_missing_period: cdktf.numberToTerraform(this._acsMissingPeriod),
      acs_missing_threshold: cdktf.numberToTerraform(this._acsMissingThreshold),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_continuous_fail_threshold: {
        value: cdktf.numberToHclTerraform(this._acsContinuousFailThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acs_missing_period: {
        value: cdktf.numberToHclTerraform(this._acsMissingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acs_missing_threshold: {
        value: cdktf.numberToHclTerraform(this._acsMissingThreshold),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
