// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateBdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd#id DataMsoSchemaTemplateBd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd#name DataMsoSchemaTemplateBd#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd#schema_id DataMsoSchemaTemplateBd#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd#template_name DataMsoSchemaTemplateBd#template_name}
  */
  readonly templateName: string;
}
export interface DataMsoSchemaTemplateBdDhcpPolicies {
}

export function dataMsoSchemaTemplateBdDhcpPoliciesToTerraform(struct?: DataMsoSchemaTemplateBdDhcpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateBdDhcpPoliciesToHclTerraform(struct?: DataMsoSchemaTemplateBdDhcpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateBdDhcpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateBdDhcpPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateBdDhcpPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_option_policy_name - computed: true, optional: false, required: false
  public get dhcpOptionPolicyName() {
    return this.getStringAttribute('dhcp_option_policy_name');
  }

  // dhcp_option_policy_version - computed: true, optional: false, required: false
  public get dhcpOptionPolicyVersion() {
    return this.getNumberAttribute('dhcp_option_policy_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataMsoSchemaTemplateBdDhcpPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateBdDhcpPoliciesOutputReference {
    return new DataMsoSchemaTemplateBdDhcpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd mso_schema_template_bd}
*/
export class DataMsoSchemaTemplateBd extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_bd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateBd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateBd to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateBd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateBd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_bd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_bd mso_schema_template_bd} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateBdConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateBdConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_bd',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_flooding - computed: true, optional: false, required: false
  public get arpFlooding() {
    return this.getBooleanAttribute('arp_flooding');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dhcp_policies - computed: true, optional: false, required: false
  private _dhcpPolicies = new DataMsoSchemaTemplateBdDhcpPoliciesList(this, "dhcp_policies", true);
  public get dhcpPolicies() {
    return this._dhcpPolicies;
  }

  // dhcp_policy - computed: true, optional: false, required: false
  private _dhcpPolicy = new cdktf.StringMap(this, "dhcp_policy");
  public get dhcpPolicy() {
    return this._dhcpPolicy;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ep_move_detection_mode - computed: true, optional: false, required: false
  public get epMoveDetectionMode() {
    return this.getStringAttribute('ep_move_detection_mode');
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

  // intersite_bum_traffic - computed: true, optional: false, required: false
  public get intersiteBumTraffic() {
    return this.getBooleanAttribute('intersite_bum_traffic');
  }

  // ipv6_unknown_multicast_flooding - computed: true, optional: false, required: false
  public get ipv6UnknownMulticastFlooding() {
    return this.getStringAttribute('ipv6_unknown_multicast_flooding');
  }

  // layer2_stretch - computed: true, optional: false, required: false
  public get layer2Stretch() {
    return this.getBooleanAttribute('layer2_stretch');
  }

  // layer2_unknown_unicast - computed: true, optional: false, required: false
  public get layer2UnknownUnicast() {
    return this.getStringAttribute('layer2_unknown_unicast');
  }

  // layer3_multicast - computed: true, optional: false, required: false
  public get layer3Multicast() {
    return this.getBooleanAttribute('layer3_multicast');
  }

  // multi_destination_flooding - computed: true, optional: false, required: false
  public get multiDestinationFlooding() {
    return this.getStringAttribute('multi_destination_flooding');
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

  // optimize_wan_bandwidth - computed: true, optional: false, required: false
  public get optimizeWanBandwidth() {
    return this.getBooleanAttribute('optimize_wan_bandwidth');
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // unicast_routing - computed: true, optional: false, required: false
  public get unicastRouting() {
    return this.getBooleanAttribute('unicast_routing');
  }

  // unknown_multicast_flooding - computed: true, optional: false, required: false
  public get unknownMulticastFlooding() {
    return this.getStringAttribute('unknown_multicast_flooding');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // virtual_mac_address - computed: true, optional: false, required: false
  public get virtualMacAddress() {
    return this.getStringAttribute('virtual_mac_address');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_schema_id - computed: true, optional: false, required: false
  public get vrfSchemaId() {
    return this.getStringAttribute('vrf_schema_id');
  }

  // vrf_template_name - computed: true, optional: false, required: false
  public get vrfTemplateName() {
    return this.getStringAttribute('vrf_template_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
