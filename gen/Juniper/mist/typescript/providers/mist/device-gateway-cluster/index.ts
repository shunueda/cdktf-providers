// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceGatewayClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * When replacing a node, either mac has to remain the same as existing cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster#nodes DeviceGatewayCluster#nodes}
  */
  readonly nodes: DeviceGatewayClusterNodes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster#site_id DeviceGatewayCluster#site_id}
  */
  readonly siteId: string;
}
export interface DeviceGatewayClusterNodes {
  /**
  * Gateway MAC Address. Format is `[0-9a-f]{12}` (e.g. "5684dae9ac8b")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster#mac DeviceGatewayCluster#mac}
  */
  readonly mac: string;
}

export function deviceGatewayClusterNodesToTerraform(struct?: DeviceGatewayClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function deviceGatewayClusterNodesToHclTerraform(struct?: DeviceGatewayClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGatewayClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceGatewayClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGatewayClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mac = value.mac;
    }
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}

export class DeviceGatewayClusterNodesList extends cdktf.ComplexList {
  public internalValue? : DeviceGatewayClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): DeviceGatewayClusterNodesOutputReference {
    return new DeviceGatewayClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster mist_device_gateway_cluster}
*/
export class DeviceGatewayCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_device_gateway_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceGatewayCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceGatewayCluster to import
  * @param importFromId The id of the existing DeviceGatewayCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceGatewayCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_device_gateway_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/device_gateway_cluster mist_device_gateway_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceGatewayClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceGatewayClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_device_gateway_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nodes.internalValue = config.nodes;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new DeviceGatewayClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DeviceGatewayClusterNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nodes: cdktf.listMapper(deviceGatewayClusterNodesToTerraform, false)(this._nodes.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nodes: {
        value: cdktf.listMapperHcl(deviceGatewayClusterNodesToHclTerraform, false)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceGatewayClusterNodesList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
