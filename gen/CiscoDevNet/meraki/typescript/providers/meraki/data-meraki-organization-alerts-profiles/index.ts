// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_alerts_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationAlertsProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_alerts_profiles#organization_id DataMerakiOrganizationAlertsProfiles#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiOrganizationAlertsProfilesItems {
}

export function dataMerakiOrganizationAlertsProfilesItemsToTerraform(struct?: DataMerakiOrganizationAlertsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiOrganizationAlertsProfilesItemsToHclTerraform(struct?: DataMerakiOrganizationAlertsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiOrganizationAlertsProfilesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiOrganizationAlertsProfilesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiOrganizationAlertsProfilesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_condition_bit_rate_bps - computed: true, optional: false, required: false
  public get alertConditionBitRateBps() {
    return this.getNumberAttribute('alert_condition_bit_rate_bps');
  }

  // alert_condition_duration - computed: true, optional: false, required: false
  public get alertConditionDuration() {
    return this.getNumberAttribute('alert_condition_duration');
  }

  // alert_condition_interface - computed: true, optional: false, required: false
  public get alertConditionInterface() {
    return this.getStringAttribute('alert_condition_interface');
  }

  // alert_condition_jitter_ms - computed: true, optional: false, required: false
  public get alertConditionJitterMs() {
    return this.getNumberAttribute('alert_condition_jitter_ms');
  }

  // alert_condition_latency_ms - computed: true, optional: false, required: false
  public get alertConditionLatencyMs() {
    return this.getNumberAttribute('alert_condition_latency_ms');
  }

  // alert_condition_loss_ratio - computed: true, optional: false, required: false
  public get alertConditionLossRatio() {
    return this.getNumberAttribute('alert_condition_loss_ratio');
  }

  // alert_condition_mos - computed: true, optional: false, required: false
  public get alertConditionMos() {
    return this.getNumberAttribute('alert_condition_mos');
  }

  // alert_condition_window - computed: true, optional: false, required: false
  public get alertConditionWindow() {
    return this.getNumberAttribute('alert_condition_window');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_tags - computed: true, optional: false, required: false
  public get networkTags() {
    return cdktf.Fn.tolist(this.getListAttribute('network_tags'));
  }

  // recipients_emails - computed: true, optional: false, required: false
  public get recipientsEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_emails'));
  }

  // recipients_http_server_ids - computed: true, optional: false, required: false
  public get recipientsHttpServerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients_http_server_ids'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMerakiOrganizationAlertsProfilesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiOrganizationAlertsProfilesItemsOutputReference {
    return new DataMerakiOrganizationAlertsProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_alerts_profiles meraki_organization_alerts_profiles}
*/
export class DataMerakiOrganizationAlertsProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_alerts_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationAlertsProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationAlertsProfiles to import
  * @param importFromId The id of the existing DataMerakiOrganizationAlertsProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_alerts_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationAlertsProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_alerts_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_alerts_profiles meraki_organization_alerts_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationAlertsProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationAlertsProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_alerts_profiles',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiOrganizationAlertsProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
