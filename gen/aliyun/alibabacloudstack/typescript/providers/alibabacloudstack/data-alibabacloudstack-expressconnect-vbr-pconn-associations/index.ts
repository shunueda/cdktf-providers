// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackExpressconnectVbrPconnAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations#id DataAlibabacloudstackExpressconnectVbrPconnAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations#physical_connection_id DataAlibabacloudstackExpressconnectVbrPconnAssociations#physical_connection_id}
  */
  readonly physicalConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations#vbr_id DataAlibabacloudstackExpressconnectVbrPconnAssociations#vbr_id}
  */
  readonly vbrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations#vlan_id DataAlibabacloudstackExpressconnectVbrPconnAssociations#vlan_id}
  */
  readonly vlanId?: string;
}
export interface DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociations {
}

export function dataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsToTerraform(struct?: DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsToHclTerraform(struct?: DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // circuit_code - computed: true, optional: false, required: false
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }

  // enable_ipv6 - computed: true, optional: false, required: false
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }

  // local_gateway_ip - computed: true, optional: false, required: false
  public get localGatewayIp() {
    return this.getStringAttribute('local_gateway_ip');
  }

  // local_ipv6_gateway_ip - computed: true, optional: false, required: false
  public get localIpv6GatewayIp() {
    return this.getStringAttribute('local_ipv6_gateway_ip');
  }

  // peer_gateway_ip - computed: true, optional: false, required: false
  public get peerGatewayIp() {
    return this.getStringAttribute('peer_gateway_ip');
  }

  // peer_ipv6_gateway_ip - computed: true, optional: false, required: false
  public get peerIpv6GatewayIp() {
    return this.getStringAttribute('peer_ipv6_gateway_ip');
  }

  // peering_ipv6_subnet_mask - computed: true, optional: false, required: false
  public get peeringIpv6SubnetMask() {
    return this.getStringAttribute('peering_ipv6_subnet_mask');
  }

  // peering_subnet_mask - computed: true, optional: false, required: false
  public get peeringSubnetMask() {
    return this.getStringAttribute('peering_subnet_mask');
  }

  // physical_connection_id - computed: true, optional: false, required: false
  public get physicalConnectionId() {
    return this.getStringAttribute('physical_connection_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vbr_id - computed: true, optional: false, required: false
  public get vbrId() {
    return this.getStringAttribute('vbr_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsOutputReference {
    return new DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations alibabacloudstack_expressconnect_vbr_pconn_associations}
*/
export class DataAlibabacloudstackExpressconnectVbrPconnAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_vbr_pconn_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackExpressconnectVbrPconnAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackExpressconnectVbrPconnAssociations to import
  * @param importFromId The id of the existing DataAlibabacloudstackExpressconnectVbrPconnAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackExpressconnectVbrPconnAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_vbr_pconn_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/expressconnect_vbr_pconn_associations alibabacloudstack_expressconnect_vbr_pconn_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackExpressconnectVbrPconnAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackExpressconnectVbrPconnAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_vbr_pconn_associations',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._physicalConnectionId = config.physicalConnectionId;
    this._vbrId = config.vbrId;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // physical_connection_id - computed: false, optional: true, required: false
  private _physicalConnectionId?: string; 
  public get physicalConnectionId() {
    return this.getStringAttribute('physical_connection_id');
  }
  public set physicalConnectionId(value: string) {
    this._physicalConnectionId = value;
  }
  public resetPhysicalConnectionId() {
    this._physicalConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionIdInput() {
    return this._physicalConnectionId;
  }

  // vbr_id - computed: false, optional: false, required: true
  private _vbrId?: string; 
  public get vbrId() {
    return this.getStringAttribute('vbr_id');
  }
  public set vbrId(value: string) {
    this._vbrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrIdInput() {
    return this._vbrId;
  }

  // vbr_pconn_associations - computed: true, optional: false, required: false
  private _vbrPconnAssociations = new DataAlibabacloudstackExpressconnectVbrPconnAssociationsVbrPconnAssociationsList(this, "vbr_pconn_associations", false);
  public get vbrPconnAssociations() {
    return this._vbrPconnAssociations;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      physical_connection_id: cdktf.stringToTerraform(this._physicalConnectionId),
      vbr_id: cdktf.stringToTerraform(this._vbrId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
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
      physical_connection_id: {
        value: cdktf.stringToHclTerraform(this._physicalConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vbr_id: {
        value: cdktf.stringToHclTerraform(this._vbrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
