// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneCredentialIssuanceRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier (UUID) of the credential issuance rule.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule#credential_issuance_rule_id DataPingoneCredentialIssuanceRule#credential_issuance_rule_id}
  */
  readonly credentialIssuanceRuleId: string;
  /**
  * The ID of the credential type with which this credential issuance rule is associated.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule#credential_type_id DataPingoneCredentialIssuanceRule#credential_type_id}
  */
  readonly credentialTypeId: string;
  /**
  * The ID of the environment to retrieve the credential issuance rule.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule#environment_id DataPingoneCredentialIssuanceRule#environment_id}
  */
  readonly environmentId: string;
}
export interface DataPingoneCredentialIssuanceRuleAutomation {
}

export function dataPingoneCredentialIssuanceRuleAutomationToTerraform(struct?: DataPingoneCredentialIssuanceRuleAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneCredentialIssuanceRuleAutomationToHclTerraform(struct?: DataPingoneCredentialIssuanceRuleAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneCredentialIssuanceRuleAutomationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneCredentialIssuanceRuleAutomation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneCredentialIssuanceRuleAutomation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issue - computed: true, optional: false, required: false
  public get issue() {
    return this.getStringAttribute('issue');
  }

  // revoke - computed: true, optional: false, required: false
  public get revoke() {
    return this.getStringAttribute('revoke');
  }

  // update - computed: true, optional: false, required: false
  public get update() {
    return this.getStringAttribute('update');
  }
}
export interface DataPingoneCredentialIssuanceRuleFilter {
}

export function dataPingoneCredentialIssuanceRuleFilterToTerraform(struct?: DataPingoneCredentialIssuanceRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneCredentialIssuanceRuleFilterToHclTerraform(struct?: DataPingoneCredentialIssuanceRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneCredentialIssuanceRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneCredentialIssuanceRuleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneCredentialIssuanceRuleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }

  // population_ids - computed: true, optional: false, required: false
  public get populationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('population_ids'));
  }

  // scim - computed: true, optional: false, required: false
  public get scim() {
    return this.getStringAttribute('scim');
  }
}
export interface DataPingoneCredentialIssuanceRuleNotificationTemplate {
}

export function dataPingoneCredentialIssuanceRuleNotificationTemplateToTerraform(struct?: DataPingoneCredentialIssuanceRuleNotificationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneCredentialIssuanceRuleNotificationTemplateToHclTerraform(struct?: DataPingoneCredentialIssuanceRuleNotificationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneCredentialIssuanceRuleNotificationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneCredentialIssuanceRuleNotificationTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneCredentialIssuanceRuleNotificationTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // variant - computed: true, optional: false, required: false
  public get variant() {
    return this.getStringAttribute('variant');
  }
}
export interface DataPingoneCredentialIssuanceRuleNotification {
}

export function dataPingoneCredentialIssuanceRuleNotificationToTerraform(struct?: DataPingoneCredentialIssuanceRuleNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneCredentialIssuanceRuleNotificationToHclTerraform(struct?: DataPingoneCredentialIssuanceRuleNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneCredentialIssuanceRuleNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneCredentialIssuanceRuleNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneCredentialIssuanceRuleNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // methods - computed: true, optional: false, required: false
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataPingoneCredentialIssuanceRuleNotificationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule pingone_credential_issuance_rule}
*/
export class DataPingoneCredentialIssuanceRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_credential_issuance_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneCredentialIssuanceRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneCredentialIssuanceRule to import
  * @param importFromId The id of the existing DataPingoneCredentialIssuanceRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneCredentialIssuanceRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_credential_issuance_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/credential_issuance_rule pingone_credential_issuance_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneCredentialIssuanceRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneCredentialIssuanceRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_credential_issuance_rule',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
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
    this._credentialIssuanceRuleId = config.credentialIssuanceRuleId;
    this._credentialTypeId = config.credentialTypeId;
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation - computed: true, optional: false, required: false
  private _automation = new DataPingoneCredentialIssuanceRuleAutomationOutputReference(this, "automation");
  public get automation() {
    return this._automation;
  }

  // credential_issuance_rule_id - computed: false, optional: false, required: true
  private _credentialIssuanceRuleId?: string; 
  public get credentialIssuanceRuleId() {
    return this.getStringAttribute('credential_issuance_rule_id');
  }
  public set credentialIssuanceRuleId(value: string) {
    this._credentialIssuanceRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIssuanceRuleIdInput() {
    return this._credentialIssuanceRuleId;
  }

  // credential_type_id - computed: false, optional: false, required: true
  private _credentialTypeId?: string; 
  public get credentialTypeId() {
    return this.getStringAttribute('credential_type_id');
  }
  public set credentialTypeId(value: string) {
    this._credentialTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeIdInput() {
    return this._credentialTypeId;
  }

  // digital_wallet_application_id - computed: true, optional: false, required: false
  public get digitalWalletApplicationId() {
    return this.getStringAttribute('digital_wallet_application_id');
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

  // filter - computed: true, optional: false, required: false
  private _filter = new DataPingoneCredentialIssuanceRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification - computed: true, optional: false, required: false
  private _notification = new DataPingoneCredentialIssuanceRuleNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_issuance_rule_id: cdktf.stringToTerraform(this._credentialIssuanceRuleId),
      credential_type_id: cdktf.stringToTerraform(this._credentialTypeId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_issuance_rule_id: {
        value: cdktf.stringToHclTerraform(this._credentialIssuanceRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_type_id: {
        value: cdktf.stringToHclTerraform(this._credentialTypeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
