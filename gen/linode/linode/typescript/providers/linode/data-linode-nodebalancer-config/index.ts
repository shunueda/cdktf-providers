// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeNodebalancerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the NodeBalancer config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config#id DataLinodeNodebalancerConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The ID of the NodeBalancer to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config#nodebalancer_id DataLinodeNodebalancerConfigA#nodebalancer_id}
  */
  readonly nodebalancerId: number;
}
export interface DataLinodeNodebalancerConfigNodeStatus {
}

export function dataLinodeNodebalancerConfigNodeStatusToTerraform(struct?: DataLinodeNodebalancerConfigNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeNodebalancerConfigNodeStatusToHclTerraform(struct?: DataLinodeNodebalancerConfigNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeNodebalancerConfigNodeStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeNodebalancerConfigNodeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeNodebalancerConfigNodeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down - computed: true, optional: false, required: false
  public get down() {
    return this.getNumberAttribute('down');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }
}

export class DataLinodeNodebalancerConfigNodeStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeNodebalancerConfigNodeStatusOutputReference {
    return new DataLinodeNodebalancerConfigNodeStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config linode_nodebalancer_config}
*/
export class DataLinodeNodebalancerConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_nodebalancer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeNodebalancerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeNodebalancerConfigA to import
  * @param importFromId The id of the existing DataLinodeNodebalancerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeNodebalancerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_nodebalancer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/nodebalancer_config linode_nodebalancer_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeNodebalancerConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeNodebalancerConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_nodebalancer_config',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
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
    this._nodebalancerId = config.nodebalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // check_attempts - computed: true, optional: false, required: false
  public get checkAttempts() {
    return this.getNumberAttribute('check_attempts');
  }

  // check_body - computed: true, optional: false, required: false
  public get checkBody() {
    return this.getStringAttribute('check_body');
  }

  // check_interval - computed: true, optional: false, required: false
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }

  // check_passive - computed: true, optional: false, required: false
  public get checkPassive() {
    return this.getBooleanAttribute('check_passive');
  }

  // check_path - computed: true, optional: false, required: false
  public get checkPath() {
    return this.getStringAttribute('check_path');
  }

  // check_timeout - computed: true, optional: false, required: false
  public get checkTimeout() {
    return this.getNumberAttribute('check_timeout');
  }

  // cipher_suite - computed: true, optional: false, required: false
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // node_status - computed: true, optional: false, required: false
  private _nodeStatus = new DataLinodeNodebalancerConfigNodeStatusList(this, "node_status", false);
  public get nodeStatus() {
    return this._nodeStatus;
  }

  // nodebalancer_id - computed: false, optional: false, required: true
  private _nodebalancerId?: number; 
  public get nodebalancerId() {
    return this.getNumberAttribute('nodebalancer_id');
  }
  public set nodebalancerId(value: number) {
    this._nodebalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerIdInput() {
    return this._nodebalancerId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy_protocol - computed: true, optional: false, required: false
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }

  // ssl_commonname - computed: true, optional: false, required: false
  public get sslCommonname() {
    return this.getStringAttribute('ssl_commonname');
  }

  // ssl_fingerprint - computed: true, optional: false, required: false
  public get sslFingerprint() {
    return this.getStringAttribute('ssl_fingerprint');
  }

  // stickiness - computed: true, optional: false, required: false
  public get stickiness() {
    return this.getStringAttribute('stickiness');
  }

  // udp_check_port - computed: true, optional: false, required: false
  public get udpCheckPort() {
    return this.getNumberAttribute('udp_check_port');
  }

  // udp_session_timeout - computed: true, optional: false, required: false
  public get udpSessionTimeout() {
    return this.getNumberAttribute('udp_session_timeout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      nodebalancer_id: cdktf.numberToTerraform(this._nodebalancerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodebalancer_id: {
        value: cdktf.numberToHclTerraform(this._nodebalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
