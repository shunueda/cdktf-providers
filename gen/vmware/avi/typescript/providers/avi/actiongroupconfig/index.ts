// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiongroupconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#action_script_config_ref Actiongroupconfig#action_script_config_ref}
  */
  readonly actionScriptConfigRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#autoscale_trigger_notification Actiongroupconfig#autoscale_trigger_notification}
  */
  readonly autoscaleTriggerNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#description Actiongroupconfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#email_config_ref Actiongroupconfig#email_config_ref}
  */
  readonly emailConfigRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#external_only Actiongroupconfig#external_only}
  */
  readonly externalOnly: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#id Actiongroupconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#level Actiongroupconfig#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#name Actiongroupconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#snmp_trap_profile_ref Actiongroupconfig#snmp_trap_profile_ref}
  */
  readonly snmpTrapProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#syslog_config_ref Actiongroupconfig#syslog_config_ref}
  */
  readonly syslogConfigRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#tenant_ref Actiongroupconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#uuid Actiongroupconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#configpb_attributes Actiongroupconfig#configpb_attributes}
  */
  readonly configpbAttributes?: ActiongroupconfigConfigpbAttributes[] | cdktf.IResolvable;
}
export interface ActiongroupconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#version Actiongroupconfig#version}
  */
  readonly version?: string;
}

export function actiongroupconfigConfigpbAttributesToTerraform(struct?: ActiongroupconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function actiongroupconfigConfigpbAttributesToHclTerraform(struct?: ActiongroupconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActiongroupconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ActiongroupconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiongroupconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ActiongroupconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ActiongroupconfigConfigpbAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ActiongroupconfigConfigpbAttributesOutputReference {
    return new ActiongroupconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig avi_actiongroupconfig}
*/
export class Actiongroupconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_actiongroupconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Actiongroupconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Actiongroupconfig to import
  * @param importFromId The id of the existing Actiongroupconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Actiongroupconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_actiongroupconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/actiongroupconfig avi_actiongroupconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiongroupconfigConfig
  */
  public constructor(scope: Construct, id: string, config: ActiongroupconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_actiongroupconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionScriptConfigRef = config.actionScriptConfigRef;
    this._autoscaleTriggerNotification = config.autoscaleTriggerNotification;
    this._description = config.description;
    this._emailConfigRef = config.emailConfigRef;
    this._externalOnly = config.externalOnly;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._snmpTrapProfileRef = config.snmpTrapProfileRef;
    this._syslogConfigRef = config.syslogConfigRef;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_script_config_ref - computed: true, optional: true, required: false
  private _actionScriptConfigRef?: string; 
  public get actionScriptConfigRef() {
    return this.getStringAttribute('action_script_config_ref');
  }
  public set actionScriptConfigRef(value: string) {
    this._actionScriptConfigRef = value;
  }
  public resetActionScriptConfigRef() {
    this._actionScriptConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptConfigRefInput() {
    return this._actionScriptConfigRef;
  }

  // autoscale_trigger_notification - computed: false, optional: true, required: false
  private _autoscaleTriggerNotification?: string; 
  public get autoscaleTriggerNotification() {
    return this.getStringAttribute('autoscale_trigger_notification');
  }
  public set autoscaleTriggerNotification(value: string) {
    this._autoscaleTriggerNotification = value;
  }
  public resetAutoscaleTriggerNotification() {
    this._autoscaleTriggerNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleTriggerNotificationInput() {
    return this._autoscaleTriggerNotification;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_config_ref - computed: true, optional: true, required: false
  private _emailConfigRef?: string; 
  public get emailConfigRef() {
    return this.getStringAttribute('email_config_ref');
  }
  public set emailConfigRef(value: string) {
    this._emailConfigRef = value;
  }
  public resetEmailConfigRef() {
    this._emailConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigRefInput() {
    return this._emailConfigRef;
  }

  // external_only - computed: false, optional: false, required: true
  private _externalOnly?: string; 
  public get externalOnly() {
    return this.getStringAttribute('external_only');
  }
  public set externalOnly(value: string) {
    this._externalOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOnlyInput() {
    return this._externalOnly;
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

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // snmp_trap_profile_ref - computed: true, optional: true, required: false
  private _snmpTrapProfileRef?: string; 
  public get snmpTrapProfileRef() {
    return this.getStringAttribute('snmp_trap_profile_ref');
  }
  public set snmpTrapProfileRef(value: string) {
    this._snmpTrapProfileRef = value;
  }
  public resetSnmpTrapProfileRef() {
    this._snmpTrapProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapProfileRefInput() {
    return this._snmpTrapProfileRef;
  }

  // syslog_config_ref - computed: true, optional: true, required: false
  private _syslogConfigRef?: string; 
  public get syslogConfigRef() {
    return this.getStringAttribute('syslog_config_ref');
  }
  public set syslogConfigRef(value: string) {
    this._syslogConfigRef = value;
  }
  public resetSyslogConfigRef() {
    this._syslogConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogConfigRefInput() {
    return this._syslogConfigRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ActiongroupconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ActiongroupconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_script_config_ref: cdktf.stringToTerraform(this._actionScriptConfigRef),
      autoscale_trigger_notification: cdktf.stringToTerraform(this._autoscaleTriggerNotification),
      description: cdktf.stringToTerraform(this._description),
      email_config_ref: cdktf.stringToTerraform(this._emailConfigRef),
      external_only: cdktf.stringToTerraform(this._externalOnly),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      snmp_trap_profile_ref: cdktf.stringToTerraform(this._snmpTrapProfileRef),
      syslog_config_ref: cdktf.stringToTerraform(this._syslogConfigRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(actiongroupconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_script_config_ref: {
        value: cdktf.stringToHclTerraform(this._actionScriptConfigRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_trigger_notification: {
        value: cdktf.stringToHclTerraform(this._autoscaleTriggerNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_config_ref: {
        value: cdktf.stringToHclTerraform(this._emailConfigRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_only: {
        value: cdktf.stringToHclTerraform(this._externalOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      snmp_trap_profile_ref: {
        value: cdktf.stringToHclTerraform(this._snmpTrapProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_config_ref: {
        value: cdktf.stringToHclTerraform(this._syslogConfigRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(actiongroupconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActiongroupconfigConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
