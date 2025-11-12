// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of strings that specifies the administrator email addresses to send the alerts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#addresses AlertChannel#addresses}
  */
  readonly addresses: string[];
  /**
  * A string that specifies the name to assign to the alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#alert_name AlertChannel#alert_name}
  */
  readonly alertName?: string;
  /**
  * A string that specifies the alert channel type. Currently, this must be `EMAIL`.  Options are `EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#channel_type AlertChannel#channel_type}
  */
  readonly channelType: string;
  /**
  * The ID of the environment to manage an alert channel for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#environment_id AlertChannel#environment_id}
  */
  readonly environmentId: string;
  /**
  * A set of strings that specifies the list of alert types that administrators will not be emailed alerts for. If left undefined, no alert types are excluded.  Options are `CERTIFICATE_EXPIRED`, `CERTIFICATE_EXPIRING`, `GATEWAY_VERSION_DEPRECATED`, `GATEWAY_VERSION_DEPRECATING`, `KEY_PAIR_EXPIRED`, `KEY_PAIR_EXPIRING`, `LICENSE_90_PERCENT_USER_SOFT_LIMIT`, `LICENSE_EXPIRED`, `LICENSE_EXPIRING`, `LICENSE_ROTATED`, `LICENSE_USER_HARD_LIMIT_EXCEEDED`, `LICENSE_USER_SOFT_LIMIT_EXCEEDED`, `RATE_LIMIT_EXCEEDED`, `RATE_LIMIT_WARNING`, `RISK_CONFIGURATION`, `SUSPICIOUS_TRAFFIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#exclude_alert_types AlertChannel#exclude_alert_types}
  */
  readonly excludeAlertTypes?: string[];
  /**
  * A set of strings that specifies the list of alert types that administrators will be emailed alerts for.  Options are `CERTIFICATE_EXPIRED`, `CERTIFICATE_EXPIRING`, `GATEWAY_VERSION_DEPRECATED`, `GATEWAY_VERSION_DEPRECATING`, `KEY_PAIR_EXPIRED`, `KEY_PAIR_EXPIRING`, `LICENSE_90_PERCENT_USER_SOFT_LIMIT`, `LICENSE_EXPIRED`, `LICENSE_EXPIRING`, `LICENSE_ROTATED`, `LICENSE_USER_HARD_LIMIT_EXCEEDED`, `LICENSE_USER_SOFT_LIMIT_EXCEEDED`, `RATE_LIMIT_EXCEEDED`, `RATE_LIMIT_WARNING`, `RISK_CONFIGURATION`, `SUSPICIOUS_TRAFFIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#include_alert_types AlertChannel#include_alert_types}
  */
  readonly includeAlertTypes: string[];
  /**
  * A set of strings that specifies the severity to filters alerts by.  Options are `ERROR`, `INFO`, `WARNING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#include_severities AlertChannel#include_severities}
  */
  readonly includeSeverities: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel pingone_alert_channel}
*/
export class AlertChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_alert_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannel to import
  * @param importFromId The id of the existing AlertChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_alert_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/alert_channel pingone_alert_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_alert_channel',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._alertName = config.alertName;
    this._channelType = config.channelType;
    this._environmentId = config.environmentId;
    this._excludeAlertTypes = config.excludeAlertTypes;
    this._includeAlertTypes = config.includeAlertTypes;
    this._includeSeverities = config.includeSeverities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // alert_name - computed: false, optional: true, required: false
  private _alertName?: string; 
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  public resetAlertName() {
    this._alertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName;
  }

  // channel_type - computed: false, optional: false, required: true
  private _channelType?: string; 
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }
  public set channelType(value: string) {
    this._channelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTypeInput() {
    return this._channelType;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // exclude_alert_types - computed: false, optional: true, required: false
  private _excludeAlertTypes?: string[]; 
  public get excludeAlertTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_alert_types'));
  }
  public set excludeAlertTypes(value: string[]) {
    this._excludeAlertTypes = value;
  }
  public resetExcludeAlertTypes() {
    this._excludeAlertTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAlertTypesInput() {
    return this._excludeAlertTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_alert_types - computed: false, optional: false, required: true
  private _includeAlertTypes?: string[]; 
  public get includeAlertTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('include_alert_types'));
  }
  public set includeAlertTypes(value: string[]) {
    this._includeAlertTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAlertTypesInput() {
    return this._includeAlertTypes;
  }

  // include_severities - computed: false, optional: false, required: true
  private _includeSeverities?: string[]; 
  public get includeSeverities() {
    return cdktf.Fn.tolist(this.getListAttribute('include_severities'));
  }
  public set includeSeverities(value: string[]) {
    this._includeSeverities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSeveritiesInput() {
    return this._includeSeverities;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      alert_name: cdktf.stringToTerraform(this._alertName),
      channel_type: cdktf.stringToTerraform(this._channelType),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      exclude_alert_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAlertTypes),
      include_alert_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeAlertTypes),
      include_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeSeverities),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_name: {
        value: cdktf.stringToHclTerraform(this._alertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_type: {
        value: cdktf.stringToHclTerraform(this._channelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_alert_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAlertTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_alert_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeAlertTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeSeverities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
