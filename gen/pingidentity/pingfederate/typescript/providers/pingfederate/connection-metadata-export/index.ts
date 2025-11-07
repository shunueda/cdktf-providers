// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionMetadataExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the connection to export. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#connection_id ConnectionMetadataExport#connection_id}
  */
  readonly connectionId: string;
  /**
  * The type of connection to export. Options are `IDP` or `SP`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#connection_type ConnectionMetadataExport#connection_type}
  */
  readonly connectionType: string;
  /**
  * The signing settings to sign the metadata with. If `null`, the metadata will not be signed. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#signing_settings ConnectionMetadataExport#signing_settings}
  */
  readonly signingSettings?: ConnectionMetadataExportSigningSettings;
  /**
  * If PingFederate's secondary SSL port is configured and you want to use it for the SOAP channel, set to `true`. If client-certificate authentication is configured for the SOAP channel, the secondary port is required and this must be set to `true`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#use_secondary_port_for_soap ConnectionMetadataExport#use_secondary_port_for_soap}
  */
  readonly useSecondaryPortForSoap?: boolean | cdktf.IResolvable;
  /**
  * The virtual host name to be used as the base url. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#virtual_host_name ConnectionMetadataExport#virtual_host_name}
  */
  readonly virtualHostName?: string;
  /**
  * The virtual server ID to export the metadata with. If `null`, the connection's default will be used. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#virtual_server_id ConnectionMetadataExport#virtual_server_id}
  */
  readonly virtualServerId?: string;
}
export interface ConnectionMetadataExportSigningSettingsSigningKeyPairRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#id ConnectionMetadataExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function connectionMetadataExportSigningSettingsSigningKeyPairRefToTerraform(struct?: ConnectionMetadataExportSigningSettingsSigningKeyPairRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectionMetadataExportSigningSettingsSigningKeyPairRefToHclTerraform(struct?: ConnectionMetadataExportSigningSettingsSigningKeyPairRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionMetadataExportSigningSettingsSigningKeyPairRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionMetadataExportSigningSettingsSigningKeyPairRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionMetadataExportSigningSettingsSigningKeyPairRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ConnectionMetadataExportSigningSettings {
  /**
  * The algorithm used to sign messages sent to this partner. The default is `SHA1withDSA` for DSA certs, `SHA256withRSA` for RSA certs, and `SHA256withECDSA` for EC certs. For RSA certs, `SHA1withRSA`, `SHA384withRSA`, `SHA512withRSA`, `SHA256withRSAandMGF1`, `SHA384withRSAandMGF1` and `SHA512withRSAandMGF1` are also supported. For EC certs, `SHA384withECDSA` and `SHA512withECDSA` are also supported. If the connection is WS-Federation with JWT token type, then the possible values are `RSA SHA256`, `RSA SHA384`, `RSA SHA512`, `RSASSA-PSS SHA256`, `RSASSA-PSS SHA384`, `RSASSA-PSS SHA512`, `ECDSA SHA256`, `ECDSA SHA384`, `ECDSA SHA512`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#algorithm ConnectionMetadataExport#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Determines whether the signing certificate is included in the signature element. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#include_cert_in_signature ConnectionMetadataExport#include_cert_in_signature}
  */
  readonly includeCertInSignature?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the element with the raw public key is included in the signature element. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#include_raw_key_in_signature ConnectionMetadataExport#include_raw_key_in_signature}
  */
  readonly includeRawKeyInSignature?: boolean | cdktf.IResolvable;
  /**
  * The ID of the key pair used to sign messages sent to this partner. The ID of the key pair is also known as the alias and can be found by viewing the corresponding certificate under 'Signing & Decryption Keys & Certificates' in the PingFederate admin console. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#signing_key_pair_ref ConnectionMetadataExport#signing_key_pair_ref}
  */
  readonly signingKeyPairRef: ConnectionMetadataExportSigningSettingsSigningKeyPairRef;
}

export function connectionMetadataExportSigningSettingsToTerraform(struct?: ConnectionMetadataExportSigningSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    include_cert_in_signature: cdktf.booleanToTerraform(struct!.includeCertInSignature),
    include_raw_key_in_signature: cdktf.booleanToTerraform(struct!.includeRawKeyInSignature),
    signing_key_pair_ref: connectionMetadataExportSigningSettingsSigningKeyPairRefToTerraform(struct!.signingKeyPairRef),
  }
}


export function connectionMetadataExportSigningSettingsToHclTerraform(struct?: ConnectionMetadataExportSigningSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_cert_in_signature: {
      value: cdktf.booleanToHclTerraform(struct!.includeCertInSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_raw_key_in_signature: {
      value: cdktf.booleanToHclTerraform(struct!.includeRawKeyInSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signing_key_pair_ref: {
      value: connectionMetadataExportSigningSettingsSigningKeyPairRefToHclTerraform(struct!.signingKeyPairRef),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionMetadataExportSigningSettingsSigningKeyPairRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionMetadataExportSigningSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionMetadataExportSigningSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._includeCertInSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCertInSignature = this._includeCertInSignature;
    }
    if (this._includeRawKeyInSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRawKeyInSignature = this._includeRawKeyInSignature;
    }
    if (this._signingKeyPairRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKeyPairRef = this._signingKeyPairRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionMetadataExportSigningSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._includeCertInSignature = undefined;
      this._includeRawKeyInSignature = undefined;
      this._signingKeyPairRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._includeCertInSignature = value.includeCertInSignature;
      this._includeRawKeyInSignature = value.includeRawKeyInSignature;
      this._signingKeyPairRef.internalValue = value.signingKeyPairRef;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // include_cert_in_signature - computed: false, optional: true, required: false
  private _includeCertInSignature?: boolean | cdktf.IResolvable; 
  public get includeCertInSignature() {
    return this.getBooleanAttribute('include_cert_in_signature');
  }
  public set includeCertInSignature(value: boolean | cdktf.IResolvable) {
    this._includeCertInSignature = value;
  }
  public resetIncludeCertInSignature() {
    this._includeCertInSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCertInSignatureInput() {
    return this._includeCertInSignature;
  }

  // include_raw_key_in_signature - computed: false, optional: true, required: false
  private _includeRawKeyInSignature?: boolean | cdktf.IResolvable; 
  public get includeRawKeyInSignature() {
    return this.getBooleanAttribute('include_raw_key_in_signature');
  }
  public set includeRawKeyInSignature(value: boolean | cdktf.IResolvable) {
    this._includeRawKeyInSignature = value;
  }
  public resetIncludeRawKeyInSignature() {
    this._includeRawKeyInSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRawKeyInSignatureInput() {
    return this._includeRawKeyInSignature;
  }

  // signing_key_pair_ref - computed: false, optional: false, required: true
  private _signingKeyPairRef = new ConnectionMetadataExportSigningSettingsSigningKeyPairRefOutputReference(this, "signing_key_pair_ref");
  public get signingKeyPairRef() {
    return this._signingKeyPairRef;
  }
  public putSigningKeyPairRef(value: ConnectionMetadataExportSigningSettingsSigningKeyPairRef) {
    this._signingKeyPairRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyPairRefInput() {
    return this._signingKeyPairRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export pingfederate_connection_metadata_export}
*/
export class ConnectionMetadataExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_connection_metadata_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionMetadataExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionMetadataExport to import
  * @param importFromId The id of the existing ConnectionMetadataExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionMetadataExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_connection_metadata_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/connection_metadata_export pingfederate_connection_metadata_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionMetadataExportConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionMetadataExportConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_connection_metadata_export',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._signingSettings.internalValue = config.signingSettings;
    this._useSecondaryPortForSoap = config.useSecondaryPortForSoap;
    this._virtualHostName = config.virtualHostName;
    this._virtualServerId = config.virtualServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // exported_connection_metadata - computed: true, optional: false, required: false
  public get exportedConnectionMetadata() {
    return this.getStringAttribute('exported_connection_metadata');
  }

  // signing_settings - computed: false, optional: true, required: false
  private _signingSettings = new ConnectionMetadataExportSigningSettingsOutputReference(this, "signing_settings");
  public get signingSettings() {
    return this._signingSettings;
  }
  public putSigningSettings(value: ConnectionMetadataExportSigningSettings) {
    this._signingSettings.internalValue = value;
  }
  public resetSigningSettings() {
    this._signingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSettingsInput() {
    return this._signingSettings.internalValue;
  }

  // use_secondary_port_for_soap - computed: false, optional: true, required: false
  private _useSecondaryPortForSoap?: boolean | cdktf.IResolvable; 
  public get useSecondaryPortForSoap() {
    return this.getBooleanAttribute('use_secondary_port_for_soap');
  }
  public set useSecondaryPortForSoap(value: boolean | cdktf.IResolvable) {
    this._useSecondaryPortForSoap = value;
  }
  public resetUseSecondaryPortForSoap() {
    this._useSecondaryPortForSoap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecondaryPortForSoapInput() {
    return this._useSecondaryPortForSoap;
  }

  // virtual_host_name - computed: false, optional: true, required: false
  private _virtualHostName?: string; 
  public get virtualHostName() {
    return this.getStringAttribute('virtual_host_name');
  }
  public set virtualHostName(value: string) {
    this._virtualHostName = value;
  }
  public resetVirtualHostName() {
    this._virtualHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostNameInput() {
    return this._virtualHostName;
  }

  // virtual_server_id - computed: false, optional: true, required: false
  private _virtualServerId?: string; 
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }
  public set virtualServerId(value: string) {
    this._virtualServerId = value;
  }
  public resetVirtualServerId() {
    this._virtualServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdInput() {
    return this._virtualServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      signing_settings: connectionMetadataExportSigningSettingsToTerraform(this._signingSettings.internalValue),
      use_secondary_port_for_soap: cdktf.booleanToTerraform(this._useSecondaryPortForSoap),
      virtual_host_name: cdktf.stringToTerraform(this._virtualHostName),
      virtual_server_id: cdktf.stringToTerraform(this._virtualServerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_settings: {
        value: connectionMetadataExportSigningSettingsToHclTerraform(this._signingSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionMetadataExportSigningSettings",
      },
      use_secondary_port_for_soap: {
        value: cdktf.booleanToHclTerraform(this._useSecondaryPortForSoap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_host_name: {
        value: cdktf.stringToHclTerraform(this._virtualHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_id: {
        value: cdktf.stringToHclTerraform(this._virtualServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
