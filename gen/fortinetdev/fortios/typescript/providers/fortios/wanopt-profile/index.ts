// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#auth_group WanoptProfile#auth_group}
  */
  readonly authGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#comments WanoptProfile#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#get_all_tables WanoptProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#id WanoptProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#name WanoptProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#transparent WanoptProfile#transparent}
  */
  readonly transparent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#vdomparam WanoptProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#cifs WanoptProfile#cifs}
  */
  readonly cifs?: WanoptProfileCifs;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ftp WanoptProfile#ftp}
  */
  readonly ftp?: WanoptProfileFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#http WanoptProfile#http}
  */
  readonly http?: WanoptProfileHttp;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#mapi WanoptProfile#mapi}
  */
  readonly mapi?: WanoptProfileMapi;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tcp WanoptProfile#tcp}
  */
  readonly tcp?: WanoptProfileTcp;
}
export interface WanoptProfileCifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching WanoptProfile#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#log_traffic WanoptProfile#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#port WanoptProfile#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#prefer_chunking WanoptProfile#prefer_chunking}
  */
  readonly preferChunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#protocol_opt WanoptProfile#protocol_opt}
  */
  readonly protocolOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#secure_tunnel WanoptProfile#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#status WanoptProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_sharing WanoptProfile#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
}

export function wanoptProfileCifsToTerraform(struct?: WanoptProfileCifsOutputReference | WanoptProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_caching: cdktf.stringToTerraform(struct!.byteCaching),
    log_traffic: cdktf.stringToTerraform(struct!.logTraffic),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_chunking: cdktf.stringToTerraform(struct!.preferChunking),
    protocol_opt: cdktf.stringToTerraform(struct!.protocolOpt),
    secure_tunnel: cdktf.stringToTerraform(struct!.secureTunnel),
    status: cdktf.stringToTerraform(struct!.status),
    tunnel_sharing: cdktf.stringToTerraform(struct!.tunnelSharing),
  }
}


export function wanoptProfileCifsToHclTerraform(struct?: WanoptProfileCifsOutputReference | WanoptProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_caching: {
      value: cdktf.stringToHclTerraform(struct!.byteCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_traffic: {
      value: cdktf.stringToHclTerraform(struct!.logTraffic),
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
    prefer_chunking: {
      value: cdktf.stringToHclTerraform(struct!.preferChunking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_opt: {
      value: cdktf.stringToHclTerraform(struct!.protocolOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.secureTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_sharing: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptProfileCifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptProfileCifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCaching = this._byteCaching;
    }
    if (this._logTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTraffic = this._logTraffic;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferChunking !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferChunking = this._preferChunking;
    }
    if (this._protocolOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolOpt = this._protocolOpt;
    }
    if (this._secureTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTunnel = this._secureTunnel;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tunnelSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSharing = this._tunnelSharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptProfileCifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byteCaching = undefined;
      this._logTraffic = undefined;
      this._port = undefined;
      this._preferChunking = undefined;
      this._protocolOpt = undefined;
      this._secureTunnel = undefined;
      this._status = undefined;
      this._tunnelSharing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byteCaching = value.byteCaching;
      this._logTraffic = value.logTraffic;
      this._port = value.port;
      this._preferChunking = value.preferChunking;
      this._protocolOpt = value.protocolOpt;
      this._secureTunnel = value.secureTunnel;
      this._status = value.status;
      this._tunnelSharing = value.tunnelSharing;
    }
  }

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
  }

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
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

  // prefer_chunking - computed: true, optional: true, required: false
  private _preferChunking?: string; 
  public get preferChunking() {
    return this.getStringAttribute('prefer_chunking');
  }
  public set preferChunking(value: string) {
    this._preferChunking = value;
  }
  public resetPreferChunking() {
    this._preferChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferChunkingInput() {
    return this._preferChunking;
  }

  // protocol_opt - computed: true, optional: true, required: false
  private _protocolOpt?: string; 
  public get protocolOpt() {
    return this.getStringAttribute('protocol_opt');
  }
  public set protocolOpt(value: string) {
    this._protocolOpt = value;
  }
  public resetProtocolOpt() {
    this._protocolOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOptInput() {
    return this._protocolOpt;
  }

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }
}
export interface WanoptProfileFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching WanoptProfile#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#log_traffic WanoptProfile#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#port WanoptProfile#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#prefer_chunking WanoptProfile#prefer_chunking}
  */
  readonly preferChunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#protocol_opt WanoptProfile#protocol_opt}
  */
  readonly protocolOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#secure_tunnel WanoptProfile#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ssl WanoptProfile#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#status WanoptProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_sharing WanoptProfile#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
}

export function wanoptProfileFtpToTerraform(struct?: WanoptProfileFtpOutputReference | WanoptProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_caching: cdktf.stringToTerraform(struct!.byteCaching),
    log_traffic: cdktf.stringToTerraform(struct!.logTraffic),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_chunking: cdktf.stringToTerraform(struct!.preferChunking),
    protocol_opt: cdktf.stringToTerraform(struct!.protocolOpt),
    secure_tunnel: cdktf.stringToTerraform(struct!.secureTunnel),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    status: cdktf.stringToTerraform(struct!.status),
    tunnel_sharing: cdktf.stringToTerraform(struct!.tunnelSharing),
  }
}


export function wanoptProfileFtpToHclTerraform(struct?: WanoptProfileFtpOutputReference | WanoptProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_caching: {
      value: cdktf.stringToHclTerraform(struct!.byteCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_traffic: {
      value: cdktf.stringToHclTerraform(struct!.logTraffic),
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
    prefer_chunking: {
      value: cdktf.stringToHclTerraform(struct!.preferChunking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_opt: {
      value: cdktf.stringToHclTerraform(struct!.protocolOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.secureTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.stringToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_sharing: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptProfileFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptProfileFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCaching = this._byteCaching;
    }
    if (this._logTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTraffic = this._logTraffic;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferChunking !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferChunking = this._preferChunking;
    }
    if (this._protocolOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolOpt = this._protocolOpt;
    }
    if (this._secureTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTunnel = this._secureTunnel;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tunnelSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSharing = this._tunnelSharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptProfileFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byteCaching = undefined;
      this._logTraffic = undefined;
      this._port = undefined;
      this._preferChunking = undefined;
      this._protocolOpt = undefined;
      this._secureTunnel = undefined;
      this._ssl = undefined;
      this._status = undefined;
      this._tunnelSharing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byteCaching = value.byteCaching;
      this._logTraffic = value.logTraffic;
      this._port = value.port;
      this._preferChunking = value.preferChunking;
      this._protocolOpt = value.protocolOpt;
      this._secureTunnel = value.secureTunnel;
      this._ssl = value.ssl;
      this._status = value.status;
      this._tunnelSharing = value.tunnelSharing;
    }
  }

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
  }

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
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

  // prefer_chunking - computed: true, optional: true, required: false
  private _preferChunking?: string; 
  public get preferChunking() {
    return this.getStringAttribute('prefer_chunking');
  }
  public set preferChunking(value: string) {
    this._preferChunking = value;
  }
  public resetPreferChunking() {
    this._preferChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferChunkingInput() {
    return this._preferChunking;
  }

  // protocol_opt - computed: true, optional: true, required: false
  private _protocolOpt?: string; 
  public get protocolOpt() {
    return this.getStringAttribute('protocol_opt');
  }
  public set protocolOpt(value: string) {
    this._protocolOpt = value;
  }
  public resetProtocolOpt() {
    this._protocolOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOptInput() {
    return this._protocolOpt;
  }

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }
}
export interface WanoptProfileHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching WanoptProfile#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#log_traffic WanoptProfile#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#port WanoptProfile#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#prefer_chunking WanoptProfile#prefer_chunking}
  */
  readonly preferChunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#protocol_opt WanoptProfile#protocol_opt}
  */
  readonly protocolOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#secure_tunnel WanoptProfile#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ssl WanoptProfile#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ssl_port WanoptProfile#ssl_port}
  */
  readonly sslPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#status WanoptProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_non_http WanoptProfile#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_sharing WanoptProfile#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#unknown_http_version WanoptProfile#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
}

export function wanoptProfileHttpToTerraform(struct?: WanoptProfileHttpOutputReference | WanoptProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_caching: cdktf.stringToTerraform(struct!.byteCaching),
    log_traffic: cdktf.stringToTerraform(struct!.logTraffic),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_chunking: cdktf.stringToTerraform(struct!.preferChunking),
    protocol_opt: cdktf.stringToTerraform(struct!.protocolOpt),
    secure_tunnel: cdktf.stringToTerraform(struct!.secureTunnel),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    ssl_port: cdktf.numberToTerraform(struct!.sslPort),
    status: cdktf.stringToTerraform(struct!.status),
    tunnel_non_http: cdktf.stringToTerraform(struct!.tunnelNonHttp),
    tunnel_sharing: cdktf.stringToTerraform(struct!.tunnelSharing),
    unknown_http_version: cdktf.stringToTerraform(struct!.unknownHttpVersion),
  }
}


export function wanoptProfileHttpToHclTerraform(struct?: WanoptProfileHttpOutputReference | WanoptProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_caching: {
      value: cdktf.stringToHclTerraform(struct!.byteCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_traffic: {
      value: cdktf.stringToHclTerraform(struct!.logTraffic),
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
    prefer_chunking: {
      value: cdktf.stringToHclTerraform(struct!.preferChunking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_opt: {
      value: cdktf.stringToHclTerraform(struct!.protocolOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.secureTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.stringToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_port: {
      value: cdktf.numberToHclTerraform(struct!.sslPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_non_http: {
      value: cdktf.stringToHclTerraform(struct!.tunnelNonHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_sharing: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_http_version: {
      value: cdktf.stringToHclTerraform(struct!.unknownHttpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptProfileHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptProfileHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCaching = this._byteCaching;
    }
    if (this._logTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTraffic = this._logTraffic;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferChunking !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferChunking = this._preferChunking;
    }
    if (this._protocolOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolOpt = this._protocolOpt;
    }
    if (this._secureTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTunnel = this._secureTunnel;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPort = this._sslPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tunnelNonHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelNonHttp = this._tunnelNonHttp;
    }
    if (this._tunnelSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSharing = this._tunnelSharing;
    }
    if (this._unknownHttpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownHttpVersion = this._unknownHttpVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptProfileHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byteCaching = undefined;
      this._logTraffic = undefined;
      this._port = undefined;
      this._preferChunking = undefined;
      this._protocolOpt = undefined;
      this._secureTunnel = undefined;
      this._ssl = undefined;
      this._sslPort = undefined;
      this._status = undefined;
      this._tunnelNonHttp = undefined;
      this._tunnelSharing = undefined;
      this._unknownHttpVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byteCaching = value.byteCaching;
      this._logTraffic = value.logTraffic;
      this._port = value.port;
      this._preferChunking = value.preferChunking;
      this._protocolOpt = value.protocolOpt;
      this._secureTunnel = value.secureTunnel;
      this._ssl = value.ssl;
      this._sslPort = value.sslPort;
      this._status = value.status;
      this._tunnelNonHttp = value.tunnelNonHttp;
      this._tunnelSharing = value.tunnelSharing;
      this._unknownHttpVersion = value.unknownHttpVersion;
    }
  }

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
  }

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
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

  // prefer_chunking - computed: true, optional: true, required: false
  private _preferChunking?: string; 
  public get preferChunking() {
    return this.getStringAttribute('prefer_chunking');
  }
  public set preferChunking(value: string) {
    this._preferChunking = value;
  }
  public resetPreferChunking() {
    this._preferChunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferChunkingInput() {
    return this._preferChunking;
  }

  // protocol_opt - computed: true, optional: true, required: false
  private _protocolOpt?: string; 
  public get protocolOpt() {
    return this.getStringAttribute('protocol_opt');
  }
  public set protocolOpt(value: string) {
    this._protocolOpt = value;
  }
  public resetProtocolOpt() {
    this._protocolOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOptInput() {
    return this._protocolOpt;
  }

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_port - computed: false, optional: true, required: false
  private _sslPort?: number; 
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }
  public set sslPort(value: number) {
    this._sslPort = value;
  }
  public resetSslPort() {
    this._sslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortInput() {
    return this._sslPort;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tunnel_non_http - computed: false, optional: true, required: false
  private _tunnelNonHttp?: string; 
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }
  public set tunnelNonHttp(value: string) {
    this._tunnelNonHttp = value;
  }
  public resetTunnelNonHttp() {
    this._tunnelNonHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNonHttpInput() {
    return this._tunnelNonHttp;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }

  // unknown_http_version - computed: false, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }
}
export interface WanoptProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching WanoptProfile#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#log_traffic WanoptProfile#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#port WanoptProfile#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#secure_tunnel WanoptProfile#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#status WanoptProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_sharing WanoptProfile#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
}

export function wanoptProfileMapiToTerraform(struct?: WanoptProfileMapiOutputReference | WanoptProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_caching: cdktf.stringToTerraform(struct!.byteCaching),
    log_traffic: cdktf.stringToTerraform(struct!.logTraffic),
    port: cdktf.numberToTerraform(struct!.port),
    secure_tunnel: cdktf.stringToTerraform(struct!.secureTunnel),
    status: cdktf.stringToTerraform(struct!.status),
    tunnel_sharing: cdktf.stringToTerraform(struct!.tunnelSharing),
  }
}


export function wanoptProfileMapiToHclTerraform(struct?: WanoptProfileMapiOutputReference | WanoptProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_caching: {
      value: cdktf.stringToHclTerraform(struct!.byteCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_traffic: {
      value: cdktf.stringToHclTerraform(struct!.logTraffic),
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
    secure_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.secureTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_sharing: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptProfileMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCaching = this._byteCaching;
    }
    if (this._logTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTraffic = this._logTraffic;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secureTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTunnel = this._secureTunnel;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tunnelSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSharing = this._tunnelSharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptProfileMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byteCaching = undefined;
      this._logTraffic = undefined;
      this._port = undefined;
      this._secureTunnel = undefined;
      this._status = undefined;
      this._tunnelSharing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byteCaching = value.byteCaching;
      this._logTraffic = value.logTraffic;
      this._port = value.port;
      this._secureTunnel = value.secureTunnel;
      this._status = value.status;
      this._tunnelSharing = value.tunnelSharing;
    }
  }

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
  }

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
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

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }
}
export interface WanoptProfileTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching WanoptProfile#byte_caching}
  */
  readonly byteCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#byte_caching_opt WanoptProfile#byte_caching_opt}
  */
  readonly byteCachingOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#log_traffic WanoptProfile#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#port WanoptProfile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#secure_tunnel WanoptProfile#secure_tunnel}
  */
  readonly secureTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ssl WanoptProfile#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#ssl_port WanoptProfile#ssl_port}
  */
  readonly sslPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#status WanoptProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#tunnel_sharing WanoptProfile#tunnel_sharing}
  */
  readonly tunnelSharing?: string;
}

export function wanoptProfileTcpToTerraform(struct?: WanoptProfileTcpOutputReference | WanoptProfileTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_caching: cdktf.stringToTerraform(struct!.byteCaching),
    byte_caching_opt: cdktf.stringToTerraform(struct!.byteCachingOpt),
    log_traffic: cdktf.stringToTerraform(struct!.logTraffic),
    port: cdktf.stringToTerraform(struct!.port),
    secure_tunnel: cdktf.stringToTerraform(struct!.secureTunnel),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    ssl_port: cdktf.numberToTerraform(struct!.sslPort),
    status: cdktf.stringToTerraform(struct!.status),
    tunnel_sharing: cdktf.stringToTerraform(struct!.tunnelSharing),
  }
}


export function wanoptProfileTcpToHclTerraform(struct?: WanoptProfileTcpOutputReference | WanoptProfileTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_caching: {
      value: cdktf.stringToHclTerraform(struct!.byteCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    byte_caching_opt: {
      value: cdktf.stringToHclTerraform(struct!.byteCachingOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_traffic: {
      value: cdktf.stringToHclTerraform(struct!.logTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.secureTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.stringToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_port: {
      value: cdktf.numberToHclTerraform(struct!.sslPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_sharing: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WanoptProfileTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WanoptProfileTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCaching = this._byteCaching;
    }
    if (this._byteCachingOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteCachingOpt = this._byteCachingOpt;
    }
    if (this._logTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTraffic = this._logTraffic;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secureTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTunnel = this._secureTunnel;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPort = this._sslPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tunnelSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSharing = this._tunnelSharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WanoptProfileTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byteCaching = undefined;
      this._byteCachingOpt = undefined;
      this._logTraffic = undefined;
      this._port = undefined;
      this._secureTunnel = undefined;
      this._ssl = undefined;
      this._sslPort = undefined;
      this._status = undefined;
      this._tunnelSharing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byteCaching = value.byteCaching;
      this._byteCachingOpt = value.byteCachingOpt;
      this._logTraffic = value.logTraffic;
      this._port = value.port;
      this._secureTunnel = value.secureTunnel;
      this._ssl = value.ssl;
      this._sslPort = value.sslPort;
      this._status = value.status;
      this._tunnelSharing = value.tunnelSharing;
    }
  }

  // byte_caching - computed: true, optional: true, required: false
  private _byteCaching?: string; 
  public get byteCaching() {
    return this.getStringAttribute('byte_caching');
  }
  public set byteCaching(value: string) {
    this._byteCaching = value;
  }
  public resetByteCaching() {
    this._byteCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingInput() {
    return this._byteCaching;
  }

  // byte_caching_opt - computed: true, optional: true, required: false
  private _byteCachingOpt?: string; 
  public get byteCachingOpt() {
    return this.getStringAttribute('byte_caching_opt');
  }
  public set byteCachingOpt(value: string) {
    this._byteCachingOpt = value;
  }
  public resetByteCachingOpt() {
    this._byteCachingOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteCachingOptInput() {
    return this._byteCachingOpt;
  }

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure_tunnel - computed: true, optional: true, required: false
  private _secureTunnel?: string; 
  public get secureTunnel() {
    return this.getStringAttribute('secure_tunnel');
  }
  public set secureTunnel(value: string) {
    this._secureTunnel = value;
  }
  public resetSecureTunnel() {
    this._secureTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTunnelInput() {
    return this._secureTunnel;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_port - computed: false, optional: true, required: false
  private _sslPort?: number; 
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }
  public set sslPort(value: number) {
    this._sslPort = value;
  }
  public resetSslPort() {
    this._sslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortInput() {
    return this._sslPort;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tunnel_sharing - computed: true, optional: true, required: false
  private _tunnelSharing?: string; 
  public get tunnelSharing() {
    return this.getStringAttribute('tunnel_sharing');
  }
  public set tunnelSharing(value: string) {
    this._tunnelSharing = value;
  }
  public resetTunnelSharing() {
    this._tunnelSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSharingInput() {
    return this._tunnelSharing;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile fortios_wanopt_profile}
*/
export class WanoptProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wanopt_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptProfile to import
  * @param importFromId The id of the existing WanoptProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wanopt_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_profile fortios_wanopt_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wanopt_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authGroup = config.authGroup;
    this._comments = config.comments;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._transparent = config.transparent;
    this._vdomparam = config.vdomparam;
    this._cifs.internalValue = config.cifs;
    this._ftp.internalValue = config.ftp;
    this._http.internalValue = config.http;
    this._mapi.internalValue = config.mapi;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_group - computed: false, optional: true, required: false
  private _authGroup?: string; 
  public get authGroup() {
    return this.getStringAttribute('auth_group');
  }
  public set authGroup(value: string) {
    this._authGroup = value;
  }
  public resetAuthGroup() {
    this._authGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGroupInput() {
    return this._authGroup;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // transparent - computed: true, optional: true, required: false
  private _transparent?: string; 
  public get transparent() {
    return this.getStringAttribute('transparent');
  }
  public set transparent(value: string) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // cifs - computed: false, optional: true, required: false
  private _cifs = new WanoptProfileCifsOutputReference(this, "cifs");
  public get cifs() {
    return this._cifs;
  }
  public putCifs(value: WanoptProfileCifs) {
    this._cifs.internalValue = value;
  }
  public resetCifs() {
    this._cifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new WanoptProfileFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: WanoptProfileFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new WanoptProfileHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: WanoptProfileHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // mapi - computed: false, optional: true, required: false
  private _mapi = new WanoptProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: WanoptProfileMapi) {
    this._mapi.internalValue = value;
  }
  public resetMapi() {
    this._mapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiInput() {
    return this._mapi.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new WanoptProfileTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: WanoptProfileTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_group: cdktf.stringToTerraform(this._authGroup),
      comments: cdktf.stringToTerraform(this._comments),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      transparent: cdktf.stringToTerraform(this._transparent),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cifs: wanoptProfileCifsToTerraform(this._cifs.internalValue),
      ftp: wanoptProfileFtpToTerraform(this._ftp.internalValue),
      http: wanoptProfileHttpToTerraform(this._http.internalValue),
      mapi: wanoptProfileMapiToTerraform(this._mapi.internalValue),
      tcp: wanoptProfileTcpToTerraform(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_group: {
        value: cdktf.stringToHclTerraform(this._authGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent: {
        value: cdktf.stringToHclTerraform(this._transparent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs: {
        value: wanoptProfileCifsToHclTerraform(this._cifs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptProfileCifsList",
      },
      ftp: {
        value: wanoptProfileFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptProfileFtpList",
      },
      http: {
        value: wanoptProfileHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptProfileHttpList",
      },
      mapi: {
        value: wanoptProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptProfileMapiList",
      },
      tcp: {
        value: wanoptProfileTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WanoptProfileTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
