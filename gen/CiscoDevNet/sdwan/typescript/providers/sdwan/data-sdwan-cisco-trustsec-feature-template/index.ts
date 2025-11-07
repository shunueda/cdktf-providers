// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoTrustsecFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template#id DataSdwanCiscoTrustsecFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template#name DataSdwanCiscoTrustsecFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoTrustsecFeatureTemplateSxpConnections {
}

export function dataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsToTerraform(struct?: DataSdwanCiscoTrustsecFeatureTemplateSxpConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsToHclTerraform(struct?: DataSdwanCiscoTrustsecFeatureTemplateSxpConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoTrustsecFeatureTemplateSxpConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoTrustsecFeatureTemplateSxpConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_hold_time - computed: true, optional: false, required: false
  public get maximumHoldTime() {
    return this.getNumberAttribute('maximum_hold_time');
  }

  // maximum_hold_time_variable - computed: true, optional: false, required: false
  public get maximumHoldTimeVariable() {
    return this.getStringAttribute('maximum_hold_time_variable');
  }

  // minimum_hold_time - computed: true, optional: false, required: false
  public get minimumHoldTime() {
    return this.getNumberAttribute('minimum_hold_time');
  }

  // minimum_hold_time_variable - computed: true, optional: false, required: false
  public get minimumHoldTimeVariable() {
    return this.getStringAttribute('minimum_hold_time_variable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mode_type - computed: true, optional: false, required: false
  public get modeType() {
    return this.getStringAttribute('mode_type');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }

  // preshared_key - computed: true, optional: false, required: false
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsOutputReference {
    return new DataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template sdwan_cisco_trustsec_feature_template}
*/
export class DataSdwanCiscoTrustsecFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_trustsec_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoTrustsecFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoTrustsecFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoTrustsecFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoTrustsecFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_trustsec_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_trustsec_feature_template sdwan_cisco_trustsec_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoTrustsecFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoTrustsecFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_trustsec_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_id - computed: true, optional: false, required: false
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }

  // credentials_id_variable - computed: true, optional: false, required: false
  public get credentialsIdVariable() {
    return this.getStringAttribute('credentials_id_variable');
  }

  // credentials_password - computed: true, optional: false, required: false
  public get credentialsPassword() {
    return this.getStringAttribute('credentials_password');
  }

  // credentials_password_variable - computed: true, optional: false, required: false
  public get credentialsPasswordVariable() {
    return this.getStringAttribute('credentials_password_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_sgt - computed: true, optional: false, required: false
  public get deviceSgt() {
    return this.getNumberAttribute('device_sgt');
  }

  // device_sgt_variable - computed: true, optional: false, required: false
  public get deviceSgtVariable() {
    return this.getStringAttribute('device_sgt_variable');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // enable_enforcement - computed: true, optional: false, required: false
  public get enableEnforcement() {
    return this.getBooleanAttribute('enable_enforcement');
  }

  // enable_enforcement_variable - computed: true, optional: false, required: false
  public get enableEnforcementVariable() {
    return this.getStringAttribute('enable_enforcement_variable');
  }

  // enable_sxp - computed: true, optional: false, required: false
  public get enableSxp() {
    return this.getBooleanAttribute('enable_sxp');
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

  // maximum_listener_hold_time - computed: true, optional: false, required: false
  public get maximumListenerHoldTime() {
    return this.getNumberAttribute('maximum_listener_hold_time');
  }

  // maximum_listener_hold_time_variable - computed: true, optional: false, required: false
  public get maximumListenerHoldTimeVariable() {
    return this.getStringAttribute('maximum_listener_hold_time_variable');
  }

  // minimum_listener_hold_time - computed: true, optional: false, required: false
  public get minimumListenerHoldTime() {
    return this.getNumberAttribute('minimum_listener_hold_time');
  }

  // minimum_listener_hold_time_variable - computed: true, optional: false, required: false
  public get minimumListenerHoldTimeVariable() {
    return this.getStringAttribute('minimum_listener_hold_time_variable');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // speaker_hold_time - computed: true, optional: false, required: false
  public get speakerHoldTime() {
    return this.getNumberAttribute('speaker_hold_time');
  }

  // speaker_hold_time_variable - computed: true, optional: false, required: false
  public get speakerHoldTimeVariable() {
    return this.getStringAttribute('speaker_hold_time_variable');
  }

  // sxp_connections - computed: true, optional: false, required: false
  private _sxpConnections = new DataSdwanCiscoTrustsecFeatureTemplateSxpConnectionsList(this, "sxp_connections", false);
  public get sxpConnections() {
    return this._sxpConnections;
  }

  // sxp_default_password - computed: true, optional: false, required: false
  public get sxpDefaultPassword() {
    return this.getStringAttribute('sxp_default_password');
  }

  // sxp_default_password_variable - computed: true, optional: false, required: false
  public get sxpDefaultPasswordVariable() {
    return this.getStringAttribute('sxp_default_password_variable');
  }

  // sxp_key_chain - computed: true, optional: false, required: false
  public get sxpKeyChain() {
    return this.getStringAttribute('sxp_key_chain');
  }

  // sxp_key_chain_variable - computed: true, optional: false, required: false
  public get sxpKeyChainVariable() {
    return this.getStringAttribute('sxp_key_chain_variable');
  }

  // sxp_log_binding_changes - computed: true, optional: false, required: false
  public get sxpLogBindingChanges() {
    return this.getBooleanAttribute('sxp_log_binding_changes');
  }

  // sxp_log_binding_changes_variable - computed: true, optional: false, required: false
  public get sxpLogBindingChangesVariable() {
    return this.getStringAttribute('sxp_log_binding_changes_variable');
  }

  // sxp_node_id - computed: true, optional: false, required: false
  public get sxpNodeId() {
    return this.getStringAttribute('sxp_node_id');
  }

  // sxp_node_id_type - computed: true, optional: false, required: false
  public get sxpNodeIdType() {
    return this.getStringAttribute('sxp_node_id_type');
  }

  // sxp_node_id_variable - computed: true, optional: false, required: false
  public get sxpNodeIdVariable() {
    return this.getStringAttribute('sxp_node_id_variable');
  }

  // sxp_reconciliation_period - computed: true, optional: false, required: false
  public get sxpReconciliationPeriod() {
    return this.getNumberAttribute('sxp_reconciliation_period');
  }

  // sxp_reconciliation_period_variable - computed: true, optional: false, required: false
  public get sxpReconciliationPeriodVariable() {
    return this.getStringAttribute('sxp_reconciliation_period_variable');
  }

  // sxp_retry_period - computed: true, optional: false, required: false
  public get sxpRetryPeriod() {
    return this.getNumberAttribute('sxp_retry_period');
  }

  // sxp_retry_period_variable - computed: true, optional: false, required: false
  public get sxpRetryPeriodVariable() {
    return this.getStringAttribute('sxp_retry_period_variable');
  }

  // sxp_source_ip - computed: true, optional: false, required: false
  public get sxpSourceIp() {
    return this.getStringAttribute('sxp_source_ip');
  }

  // sxp_source_ip_variable - computed: true, optional: false, required: false
  public get sxpSourceIpVariable() {
    return this.getStringAttribute('sxp_source_ip_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
