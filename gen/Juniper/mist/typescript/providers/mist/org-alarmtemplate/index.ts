// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgAlarmtemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delivery object to configure the alarm delivery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#delivery OrgAlarmtemplate#delivery}
  */
  readonly delivery: OrgAlarmtemplateDelivery;
  /**
  * Some string to name the alarm template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#name OrgAlarmtemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#org_id OrgAlarmtemplate#org_id}
  */
  readonly orgId: string;
  /**
  * Alarm Rules object to configure the individual alarm keys/types. Property key is the alarm name (list available with the `mist_const_alarms` data source).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#rules OrgAlarmtemplate#rules}
  */
  readonly rules: { [key: string]: OrgAlarmtemplateRules } | cdktf.IResolvable;
}
export interface OrgAlarmtemplateDelivery {
  /**
  * List of additional email string to deliver the alarms via emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#additional_emails OrgAlarmtemplate#additional_emails}
  */
  readonly additionalEmails?: string[];
  /**
  * Whether to enable the alarm delivery via emails or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#enabled OrgAlarmtemplate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether to deliver the alarms via emails to Org admins or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#to_org_admins OrgAlarmtemplate#to_org_admins}
  */
  readonly toOrgAdmins?: boolean | cdktf.IResolvable;
  /**
  * Whether to deliver the alarms via emails to Site admins or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#to_site_admins OrgAlarmtemplate#to_site_admins}
  */
  readonly toSiteAdmins?: boolean | cdktf.IResolvable;
}

export function orgAlarmtemplateDeliveryToTerraform(struct?: OrgAlarmtemplateDelivery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalEmails),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    to_org_admins: cdktf.booleanToTerraform(struct!.toOrgAdmins),
    to_site_admins: cdktf.booleanToTerraform(struct!.toSiteAdmins),
  }
}


export function orgAlarmtemplateDeliveryToHclTerraform(struct?: OrgAlarmtemplateDelivery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_org_admins: {
      value: cdktf.booleanToHclTerraform(struct!.toOrgAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_site_admins: {
      value: cdktf.booleanToHclTerraform(struct!.toSiteAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgAlarmtemplateDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgAlarmtemplateDelivery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEmails = this._additionalEmails;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._toOrgAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.toOrgAdmins = this._toOrgAdmins;
    }
    if (this._toSiteAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSiteAdmins = this._toSiteAdmins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgAlarmtemplateDelivery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalEmails = undefined;
      this._enabled = undefined;
      this._toOrgAdmins = undefined;
      this._toSiteAdmins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalEmails = value.additionalEmails;
      this._enabled = value.enabled;
      this._toOrgAdmins = value.toOrgAdmins;
      this._toSiteAdmins = value.toSiteAdmins;
    }
  }

  // additional_emails - computed: true, optional: true, required: false
  private _additionalEmails?: string[]; 
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }
  public set additionalEmails(value: string[]) {
    this._additionalEmails = value;
  }
  public resetAdditionalEmails() {
    this._additionalEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailsInput() {
    return this._additionalEmails;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // to_org_admins - computed: false, optional: true, required: false
  private _toOrgAdmins?: boolean | cdktf.IResolvable; 
  public get toOrgAdmins() {
    return this.getBooleanAttribute('to_org_admins');
  }
  public set toOrgAdmins(value: boolean | cdktf.IResolvable) {
    this._toOrgAdmins = value;
  }
  public resetToOrgAdmins() {
    this._toOrgAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toOrgAdminsInput() {
    return this._toOrgAdmins;
  }

  // to_site_admins - computed: false, optional: true, required: false
  private _toSiteAdmins?: boolean | cdktf.IResolvable; 
  public get toSiteAdmins() {
    return this.getBooleanAttribute('to_site_admins');
  }
  public set toSiteAdmins(value: boolean | cdktf.IResolvable) {
    this._toSiteAdmins = value;
  }
  public resetToSiteAdmins() {
    this._toSiteAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSiteAdminsInput() {
    return this._toSiteAdmins;
  }
}
export interface OrgAlarmtemplateRulesDelivery {
  /**
  * List of additional email string to deliver the alarms via emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#additional_emails OrgAlarmtemplate#additional_emails}
  */
  readonly additionalEmails?: string[];
  /**
  * Whether to enable the alarm delivery via emails or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#enabled OrgAlarmtemplate#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether to deliver the alarms via emails to Org admins or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#to_org_admins OrgAlarmtemplate#to_org_admins}
  */
  readonly toOrgAdmins?: boolean | cdktf.IResolvable;
  /**
  * Whether to deliver the alarms via emails to Site admins or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#to_site_admins OrgAlarmtemplate#to_site_admins}
  */
  readonly toSiteAdmins?: boolean | cdktf.IResolvable;
}

export function orgAlarmtemplateRulesDeliveryToTerraform(struct?: OrgAlarmtemplateRulesDelivery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalEmails),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    to_org_admins: cdktf.booleanToTerraform(struct!.toOrgAdmins),
    to_site_admins: cdktf.booleanToTerraform(struct!.toSiteAdmins),
  }
}


export function orgAlarmtemplateRulesDeliveryToHclTerraform(struct?: OrgAlarmtemplateRulesDelivery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_org_admins: {
      value: cdktf.booleanToHclTerraform(struct!.toOrgAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_site_admins: {
      value: cdktf.booleanToHclTerraform(struct!.toSiteAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgAlarmtemplateRulesDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgAlarmtemplateRulesDelivery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEmails = this._additionalEmails;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._toOrgAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.toOrgAdmins = this._toOrgAdmins;
    }
    if (this._toSiteAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSiteAdmins = this._toSiteAdmins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgAlarmtemplateRulesDelivery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalEmails = undefined;
      this._enabled = undefined;
      this._toOrgAdmins = undefined;
      this._toSiteAdmins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalEmails = value.additionalEmails;
      this._enabled = value.enabled;
      this._toOrgAdmins = value.toOrgAdmins;
      this._toSiteAdmins = value.toSiteAdmins;
    }
  }

  // additional_emails - computed: true, optional: true, required: false
  private _additionalEmails?: string[]; 
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }
  public set additionalEmails(value: string[]) {
    this._additionalEmails = value;
  }
  public resetAdditionalEmails() {
    this._additionalEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailsInput() {
    return this._additionalEmails;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // to_org_admins - computed: false, optional: true, required: false
  private _toOrgAdmins?: boolean | cdktf.IResolvable; 
  public get toOrgAdmins() {
    return this.getBooleanAttribute('to_org_admins');
  }
  public set toOrgAdmins(value: boolean | cdktf.IResolvable) {
    this._toOrgAdmins = value;
  }
  public resetToOrgAdmins() {
    this._toOrgAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toOrgAdminsInput() {
    return this._toOrgAdmins;
  }

  // to_site_admins - computed: false, optional: true, required: false
  private _toSiteAdmins?: boolean | cdktf.IResolvable; 
  public get toSiteAdmins() {
    return this.getBooleanAttribute('to_site_admins');
  }
  public set toSiteAdmins(value: boolean | cdktf.IResolvable) {
    this._toSiteAdmins = value;
  }
  public resetToSiteAdmins() {
    this._toSiteAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSiteAdminsInput() {
    return this._toSiteAdmins;
  }
}
export interface OrgAlarmtemplateRules {
  /**
  * Delivery object to configure the alarm delivery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#delivery OrgAlarmtemplate#delivery}
  */
  readonly delivery?: OrgAlarmtemplateRulesDelivery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#enabled OrgAlarmtemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgAlarmtemplateRulesToTerraform(struct?: OrgAlarmtemplateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery: orgAlarmtemplateRulesDeliveryToTerraform(struct!.delivery),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgAlarmtemplateRulesToHclTerraform(struct?: OrgAlarmtemplateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery: {
      value: orgAlarmtemplateRulesDeliveryToHclTerraform(struct!.delivery),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgAlarmtemplateRulesDelivery",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgAlarmtemplateRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgAlarmtemplateRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delivery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delivery = this._delivery?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgAlarmtemplateRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delivery.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delivery.internalValue = value.delivery;
      this._enabled = value.enabled;
    }
  }

  // delivery - computed: false, optional: true, required: false
  private _delivery = new OrgAlarmtemplateRulesDeliveryOutputReference(this, "delivery");
  public get delivery() {
    return this._delivery;
  }
  public putDelivery(value: OrgAlarmtemplateRulesDelivery) {
    this._delivery.internalValue = value;
  }
  public resetDelivery() {
    this._delivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryInput() {
    return this._delivery.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class OrgAlarmtemplateRulesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgAlarmtemplateRules } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgAlarmtemplateRulesOutputReference {
    return new OrgAlarmtemplateRulesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate mist_org_alarmtemplate}
*/
export class OrgAlarmtemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_alarmtemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgAlarmtemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgAlarmtemplate to import
  * @param importFromId The id of the existing OrgAlarmtemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgAlarmtemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_alarmtemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_alarmtemplate mist_org_alarmtemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgAlarmtemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OrgAlarmtemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_alarmtemplate',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delivery.internalValue = config.delivery;
    this._name = config.name;
    this._orgId = config.orgId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery - computed: false, optional: false, required: true
  private _delivery = new OrgAlarmtemplateDeliveryOutputReference(this, "delivery");
  public get delivery() {
    return this._delivery;
  }
  public putDelivery(value: OrgAlarmtemplateDelivery) {
    this._delivery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryInput() {
    return this._delivery.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new OrgAlarmtemplateRulesMap(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: { [key: string]: OrgAlarmtemplateRules } | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery: orgAlarmtemplateDeliveryToTerraform(this._delivery.internalValue),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      rules: cdktf.hashMapper(orgAlarmtemplateRulesToTerraform)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery: {
        value: orgAlarmtemplateDeliveryToHclTerraform(this._delivery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgAlarmtemplateDelivery",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      rules: {
        value: cdktf.hashMapperHcl(orgAlarmtemplateRulesToHclTerraform)(this._rules.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgAlarmtemplateRulesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
