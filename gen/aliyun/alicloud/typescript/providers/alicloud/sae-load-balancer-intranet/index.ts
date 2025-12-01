// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaeLoadBalancerIntranetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#app_id SaeLoadBalancerIntranet#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#id SaeLoadBalancerIntranet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#intranet_slb_id SaeLoadBalancerIntranet#intranet_slb_id}
  */
  readonly intranetSlbId?: string;
  /**
  * intranet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#intranet SaeLoadBalancerIntranet#intranet}
  */
  readonly intranet: SaeLoadBalancerIntranetIntranet[] | cdktf.IResolvable;
}
export interface SaeLoadBalancerIntranetIntranet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#https_cert_id SaeLoadBalancerIntranet#https_cert_id}
  */
  readonly httpsCertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#port SaeLoadBalancerIntranet#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#protocol SaeLoadBalancerIntranet#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#target_port SaeLoadBalancerIntranet#target_port}
  */
  readonly targetPort?: number;
}

export function saeLoadBalancerIntranetIntranetToTerraform(struct?: SaeLoadBalancerIntranetIntranet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https_cert_id: cdktf.stringToTerraform(struct!.httpsCertId),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function saeLoadBalancerIntranetIntranetToHclTerraform(struct?: SaeLoadBalancerIntranetIntranet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https_cert_id: {
      value: cdktf.stringToHclTerraform(struct!.httpsCertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeLoadBalancerIntranetIntranetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SaeLoadBalancerIntranetIntranet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsCertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCertId = this._httpsCertId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeLoadBalancerIntranetIntranet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpsCertId = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpsCertId = value.httpsCertId;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // https_cert_id - computed: false, optional: true, required: false
  private _httpsCertId?: string; 
  public get httpsCertId() {
    return this.getStringAttribute('https_cert_id');
  }
  public set httpsCertId(value: string) {
    this._httpsCertId = value;
  }
  public resetHttpsCertId() {
    this._httpsCertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCertIdInput() {
    return this._httpsCertId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class SaeLoadBalancerIntranetIntranetList extends cdktf.ComplexList {
  public internalValue? : SaeLoadBalancerIntranetIntranet[] | cdktf.IResolvable

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
  public get(index: number): SaeLoadBalancerIntranetIntranetOutputReference {
    return new SaeLoadBalancerIntranetIntranetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet alicloud_sae_load_balancer_intranet}
*/
export class SaeLoadBalancerIntranet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sae_load_balancer_intranet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaeLoadBalancerIntranet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaeLoadBalancerIntranet to import
  * @param importFromId The id of the existing SaeLoadBalancerIntranet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaeLoadBalancerIntranet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sae_load_balancer_intranet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/sae_load_balancer_intranet alicloud_sae_load_balancer_intranet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaeLoadBalancerIntranetConfig
  */
  public constructor(scope: Construct, id: string, config: SaeLoadBalancerIntranetConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sae_load_balancer_intranet',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._id = config.id;
    this._intranetSlbId = config.intranetSlbId;
    this._intranet.internalValue = config.intranet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // intranet_ip - computed: true, optional: false, required: false
  public get intranetIp() {
    return this.getStringAttribute('intranet_ip');
  }

  // intranet_slb_id - computed: false, optional: true, required: false
  private _intranetSlbId?: string; 
  public get intranetSlbId() {
    return this.getStringAttribute('intranet_slb_id');
  }
  public set intranetSlbId(value: string) {
    this._intranetSlbId = value;
  }
  public resetIntranetSlbId() {
    this._intranetSlbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetSlbIdInput() {
    return this._intranetSlbId;
  }

  // intranet - computed: false, optional: false, required: true
  private _intranet = new SaeLoadBalancerIntranetIntranetList(this, "intranet", true);
  public get intranet() {
    return this._intranet;
  }
  public putIntranet(value: SaeLoadBalancerIntranetIntranet[] | cdktf.IResolvable) {
    this._intranet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetInput() {
    return this._intranet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      intranet_slb_id: cdktf.stringToTerraform(this._intranetSlbId),
      intranet: cdktf.listMapper(saeLoadBalancerIntranetIntranetToTerraform, true)(this._intranet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      intranet_slb_id: {
        value: cdktf.stringToHclTerraform(this._intranetSlbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet: {
        value: cdktf.listMapperHcl(saeLoadBalancerIntranetIntranetToHclTerraform, true)(this._intranet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SaeLoadBalancerIntranetIntranetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
