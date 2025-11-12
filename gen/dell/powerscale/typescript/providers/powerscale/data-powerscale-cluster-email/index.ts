// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleClusterEmailConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPowerscaleClusterEmailSettings {
}

export function dataPowerscaleClusterEmailSettingsToTerraform(struct?: DataPowerscaleClusterEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleClusterEmailSettingsToHclTerraform(struct?: DataPowerscaleClusterEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleClusterEmailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleClusterEmailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleClusterEmailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getStringAttribute('batch_mode');
  }

  // mail_relay - computed: true, optional: false, required: false
  public get mailRelay() {
    return this.getStringAttribute('mail_relay');
  }

  // mail_sender - computed: true, optional: false, required: false
  public get mailSender() {
    return this.getStringAttribute('mail_sender');
  }

  // mail_subject - computed: true, optional: false, required: false
  public get mailSubject() {
    return this.getStringAttribute('mail_subject');
  }

  // smtp_auth_passwd_set - computed: true, optional: false, required: false
  public get smtpAuthPasswdSet() {
    return this.getBooleanAttribute('smtp_auth_passwd_set');
  }

  // smtp_auth_security - computed: true, optional: false, required: false
  public get smtpAuthSecurity() {
    return this.getStringAttribute('smtp_auth_security');
  }

  // smtp_auth_username - computed: true, optional: false, required: false
  public get smtpAuthUsername() {
    return this.getStringAttribute('smtp_auth_username');
  }

  // smtp_port - computed: true, optional: false, required: false
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }

  // use_smtp_auth - computed: true, optional: false, required: false
  public get useSmtpAuth() {
    return this.getBooleanAttribute('use_smtp_auth');
  }

  // user_template - computed: true, optional: false, required: false
  public get userTemplate() {
    return this.getStringAttribute('user_template');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster_email powerscale_cluster_email}
*/
export class DataPowerscaleClusterEmail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleClusterEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleClusterEmail to import
  * @param importFromId The id of the existing DataPowerscaleClusterEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleClusterEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/cluster_email powerscale_cluster_email} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleClusterEmailConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleClusterEmailConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_email',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataPowerscaleClusterEmailSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
