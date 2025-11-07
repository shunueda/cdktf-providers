// https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHetznerRobotServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server#id DataHetznerRobotServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server#server_number DataHetznerRobotServer#server_number}
  */
  readonly serverNumber: number;
}
export interface DataHetznerRobotServerServerSubnets {
}

export function dataHetznerRobotServerServerSubnetsToTerraform(struct?: DataHetznerRobotServerServerSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHetznerRobotServerServerSubnetsToHclTerraform(struct?: DataHetznerRobotServerServerSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHetznerRobotServerServerSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHetznerRobotServerServerSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHetznerRobotServerServerSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataHetznerRobotServerServerSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataHetznerRobotServerServerSubnetsOutputReference {
    return new DataHetznerRobotServerServerSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server hetzner-robot_server}
*/
export class DataHetznerRobotServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hetzner-robot_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHetznerRobotServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHetznerRobotServer to import
  * @param importFromId The id of the existing DataHetznerRobotServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHetznerRobotServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hetzner-robot_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/data-sources/server hetzner-robot_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHetznerRobotServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataHetznerRobotServerConfig) {
    super(scope, id, {
      terraformResourceType: 'hetzner-robot_server',
      terraformGeneratorMetadata: {
        providerName: 'hetzner-robot',
        providerVersion: '3.5.5'
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
    this._serverNumber = config.serverNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpanel - computed: true, optional: false, required: false
  public get cpanel() {
    return this.getBooleanAttribute('cpanel');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // hot_swap - computed: true, optional: false, required: false
  public get hotSwap() {
    return this.getBooleanAttribute('hot_swap');
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

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // is_cancelled - computed: true, optional: false, required: false
  public get isCancelled() {
    return this.getBooleanAttribute('is_cancelled');
  }

  // linked_storagebox - computed: true, optional: false, required: false
  public get linkedStoragebox() {
    return this.getNumberAttribute('linked_storagebox');
  }

  // paid_until - computed: true, optional: false, required: false
  public get paidUntil() {
    return this.getStringAttribute('paid_until');
  }

  // plesk - computed: true, optional: false, required: false
  public get plesk() {
    return this.getBooleanAttribute('plesk');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // rescue - computed: true, optional: false, required: false
  public get rescue() {
    return this.getBooleanAttribute('rescue');
  }

  // reset - computed: true, optional: false, required: false
  public get reset() {
    return this.getBooleanAttribute('reset');
  }

  // server_ip - computed: true, optional: false, required: false
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }

  // server_ipv6 - computed: true, optional: false, required: false
  public get serverIpv6() {
    return this.getStringAttribute('server_ipv6');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // server_number - computed: false, optional: false, required: true
  private _serverNumber?: number; 
  public get serverNumber() {
    return this.getNumberAttribute('server_number');
  }
  public set serverNumber(value: number) {
    this._serverNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNumberInput() {
    return this._serverNumber;
  }

  // server_subnets - computed: true, optional: false, required: false
  private _serverSubnets = new DataHetznerRobotServerServerSubnetsList(this, "server_subnets", false);
  public get serverSubnets() {
    return this._serverSubnets;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic - computed: true, optional: false, required: false
  public get traffic() {
    return this.getStringAttribute('traffic');
  }

  // vnc - computed: true, optional: false, required: false
  public get vnc() {
    return this.getBooleanAttribute('vnc');
  }

  // windows - computed: true, optional: false, required: false
  public get windows() {
    return this.getBooleanAttribute('windows');
  }

  // wol - computed: true, optional: false, required: false
  public get wol() {
    return this.getBooleanAttribute('wol');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      server_number: cdktf.numberToTerraform(this._serverNumber),
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
      server_number: {
        value: cdktf.numberToHclTerraform(this._serverNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
