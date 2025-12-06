// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAzureTenantEventhubSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Eventhub settings for an Azure tenant registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#settings CloudAzureTenantEventhubSettings#settings}
  */
  readonly settings?: CloudAzureTenantEventhubSettingsSettings[] | cdktf.IResolvable;
  /**
  * The Azure Tenant ID to attach the eventhub settings to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#tenant_id CloudAzureTenantEventhubSettings#tenant_id}
  */
  readonly tenantId: string;
}
export interface CloudAzureTenantEventhubSettingsSettings {
  /**
  * The Azure Event Hub consumer group name used to read events from the Event Hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#consumer_group CloudAzureTenantEventhubSettings#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * The Azure eventhub ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#id CloudAzureTenantEventhubSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of eventhub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#type CloudAzureTenantEventhubSettings#type}
  */
  readonly type: string;
}

export function cloudAzureTenantEventhubSettingsSettingsToTerraform(struct?: CloudAzureTenantEventhubSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group: cdktf.stringToTerraform(struct!.consumerGroup),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudAzureTenantEventhubSettingsSettingsToHclTerraform(struct?: CloudAzureTenantEventhubSettingsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureTenantEventhubSettingsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAzureTenantEventhubSettingsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroup = this._consumerGroup;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureTenantEventhubSettingsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerGroup = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerGroup = value.consumerGroup;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudAzureTenantEventhubSettingsSettingsList extends cdktf.ComplexList {
  public internalValue? : CloudAzureTenantEventhubSettingsSettings[] | cdktf.IResolvable

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
  public get(index: number): CloudAzureTenantEventhubSettingsSettingsOutputReference {
    return new CloudAzureTenantEventhubSettingsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings crowdstrike_cloud_azure_tenant_eventhub_settings}
*/
export class CloudAzureTenantEventhubSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_azure_tenant_eventhub_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAzureTenantEventhubSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAzureTenantEventhubSettings to import
  * @param importFromId The id of the existing CloudAzureTenantEventhubSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAzureTenantEventhubSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_azure_tenant_eventhub_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_azure_tenant_eventhub_settings crowdstrike_cloud_azure_tenant_eventhub_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAzureTenantEventhubSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAzureTenantEventhubSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_azure_tenant_eventhub_settings',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.51',
        providerVersionConstraint: '0.0.51'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._settings.internalValue = config.settings;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // settings - computed: false, optional: true, required: false
  private _settings = new CloudAzureTenantEventhubSettingsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CloudAzureTenantEventhubSettingsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      settings: cdktf.listMapper(cloudAzureTenantEventhubSettingsSettingsToTerraform, false)(this._settings.internalValue),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      settings: {
        value: cdktf.listMapperHcl(cloudAzureTenantEventhubSettingsSettingsToHclTerraform, false)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAzureTenantEventhubSettingsSettingsList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
