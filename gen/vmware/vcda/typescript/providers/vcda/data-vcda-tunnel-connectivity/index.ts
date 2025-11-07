// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdaTunnelConnectivityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The certificate of the Cloud Director/vCenter Replication Manager Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity#service_cert DataVcdaTunnelConnectivity#service_cert}
  */
  readonly serviceCert: string;
  /**
  * The tunnel service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity#tunnel_id DataVcdaTunnelConnectivity#tunnel_id}
  */
  readonly tunnelId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity#timeouts DataVcdaTunnelConnectivity#timeouts}
  */
  readonly timeouts?: DataVcdaTunnelConnectivityTimeouts;
}
export interface DataVcdaTunnelConnectivityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity#read DataVcdaTunnelConnectivity#read}
  */
  readonly read?: string;
}

export function dataVcdaTunnelConnectivityTimeoutsToTerraform(struct?: DataVcdaTunnelConnectivityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataVcdaTunnelConnectivityTimeoutsToHclTerraform(struct?: DataVcdaTunnelConnectivityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdaTunnelConnectivityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVcdaTunnelConnectivityTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdaTunnelConnectivityTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity vcda_tunnel_connectivity}
*/
export class DataVcdaTunnelConnectivity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_tunnel_connectivity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdaTunnelConnectivity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdaTunnelConnectivity to import
  * @param importFromId The id of the existing DataVcdaTunnelConnectivity that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdaTunnelConnectivity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_tunnel_connectivity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/tunnel_connectivity vcda_tunnel_connectivity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdaTunnelConnectivityConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdaTunnelConnectivityConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_tunnel_connectivity',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceCert = config.serviceCert;
    this._tunnelId = config.tunnelId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_cert - computed: false, optional: false, required: true
  private _serviceCert?: string; 
  public get serviceCert() {
    return this.getStringAttribute('service_cert');
  }
  public set serviceCert(value: string) {
    this._serviceCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCertInput() {
    return this._serviceCert;
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // tunnel_service - computed: true, optional: false, required: false
  private _tunnelService = new cdktf.StringMap(this, "tunnel_service");
  public get tunnelService() {
    return this._tunnelService;
  }

  // tunnel_service_error_args - computed: true, optional: false, required: false
  public get tunnelServiceErrorArgs() {
    return this.getListAttribute('tunnel_service_error_args');
  }

  // tunnel_service_error_code - computed: true, optional: false, required: false
  public get tunnelServiceErrorCode() {
    return this.getStringAttribute('tunnel_service_error_code');
  }

  // tunnel_service_error_msg - computed: true, optional: false, required: false
  public get tunnelServiceErrorMsg() {
    return this.getStringAttribute('tunnel_service_error_msg');
  }

  // tunnel_service_error_stacktrace - computed: true, optional: false, required: false
  public get tunnelServiceErrorStacktrace() {
    return this.getStringAttribute('tunnel_service_error_stacktrace');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataVcdaTunnelConnectivityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataVcdaTunnelConnectivityTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_cert: cdktf.stringToTerraform(this._serviceCert),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
      timeouts: dataVcdaTunnelConnectivityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_cert: {
        value: cdktf.stringToHclTerraform(this._serviceCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataVcdaTunnelConnectivityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataVcdaTunnelConnectivityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
