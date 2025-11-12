// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceZscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#billing_tag_ids ServiceZscaler#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The ID of the `connector_internet_exit` associated with the zscaler service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#connector_internet_exit_id ServiceZscaler#connector_internet_exit_id}
  */
  readonly connectorInternetExitId: string;
  /**
  * The CXP where the service should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#cxp ServiceZscaler#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the Zscaler service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#description ServiceZscaler#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#id ServiceZscaler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the zscaler firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#name ServiceZscaler#name}
  */
  readonly name: string;
  /**
  * The IP for closest Zscaler PoP to CXP region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#primary_public_edge_ip ServiceZscaler#primary_public_edge_ip}
  */
  readonly primaryPublicEdgeIp: string;
  /**
  * The IP for standby Zscaler PoP to CXP region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#secondary_public_edge_ip ServiceZscaler#secondary_public_edge_ip}
  */
  readonly secondaryPublicEdgeIp: string;
  /**
  * IDs of segment associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#segment_ids ServiceZscaler#segment_ids}
  */
  readonly segmentIds: string[];
  /**
  * The size of the service one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#size ServiceZscaler#size}
  */
  readonly size: string;
  /**
  * The type of tunnel protocol to be used to connect to Zscaler PoP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#tunnel_protocol ServiceZscaler#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * ipsec_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#ipsec_configuration ServiceZscaler#ipsec_configuration}
  */
  readonly ipsecConfiguration: ServiceZscalerIpsecConfiguration[] | cdktf.IResolvable;
}
export interface ServiceZscalerIpsecConfiguration {
  /**
  * The IPSEC phase 2 DH Group to be used. Input value must be either `MODP1024`or `MODP2048`. The default value is `MODP1024`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#esp_dh_group_number ServiceZscaler#esp_dh_group_number}
  */
  readonly espDhGroupNumber?: string;
  /**
  * The IPSEC phase 2 Encryption Algorithm to be used. Input value must be either `NULL` or `AES256CBC`. The default value is `NULL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#esp_encryption_algorithm ServiceZscaler#esp_encryption_algorithm}
  */
  readonly espEncryptionAlgorithm?: string;
  /**
  * The IPSEC phase 2 Integrity Algorithm to be used. Input value must be either `MD5` or `SHA256`. The default value is `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#esp_integrity_algorithm ServiceZscaler#esp_integrity_algorithm}
  */
  readonly espIntegrityAlgorithm?: string;
  /**
  * The type of health check. Input values must be either `IKE_STATUS` `PING_PROBE` or `HTTP_PROBE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#health_check_type ServiceZscaler#health_check_type}
  */
  readonly healthCheckType: string;
  /**
  * The url to check connection to health, should be provided when health check type is 'HTTP_PROBE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#http_probe_url ServiceZscaler#http_probe_url}
  */
  readonly httpProbeUrl?: string;
  /**
  * The IPSEC phase 1 DH Group to be used. Input value must either be `MODP1024` or `MODP2048`. The default is `MODP1024`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#ike_dh_group_number ServiceZscaler#ike_dh_group_number}
  */
  readonly ikeDhGroupNumber?: string;
  /**
  * The IPSEC phase 1 Encryption Algorithm to be used. Only `AES256CBC` is allowed. The default value is `AES256CBC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#ike_encryption_algorithm ServiceZscaler#ike_encryption_algorithm}
  */
  readonly ikeEncryptionAlgorithm?: string;
  /**
  * The IPSEC phase 1 Integrity Algorithm to be used. Only `SHA256` is allowed. The default value is `SHA256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#ike_integrity_algorithm ServiceZscaler#ike_integrity_algorithm}
  */
  readonly ikeIntegrityAlgorithm?: string;
  /**
  * The local FQDN Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#local_fpdn_id ServiceZscaler#local_fpdn_id}
  */
  readonly localFpdnId: string;
  /**
  * The ping destination to check connection health. It should be provided when `health_check_type` is `PING_PROBE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#ping_probe_ip ServiceZscaler#ping_probe_ip}
  */
  readonly pingProbeIp?: string;
  /**
  * The preshared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#pre_shared_key ServiceZscaler#pre_shared_key}
  */
  readonly preSharedKey: string;
}

export function serviceZscalerIpsecConfigurationToTerraform(struct?: ServiceZscalerIpsecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esp_dh_group_number: cdktf.stringToTerraform(struct!.espDhGroupNumber),
    esp_encryption_algorithm: cdktf.stringToTerraform(struct!.espEncryptionAlgorithm),
    esp_integrity_algorithm: cdktf.stringToTerraform(struct!.espIntegrityAlgorithm),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    http_probe_url: cdktf.stringToTerraform(struct!.httpProbeUrl),
    ike_dh_group_number: cdktf.stringToTerraform(struct!.ikeDhGroupNumber),
    ike_encryption_algorithm: cdktf.stringToTerraform(struct!.ikeEncryptionAlgorithm),
    ike_integrity_algorithm: cdktf.stringToTerraform(struct!.ikeIntegrityAlgorithm),
    local_fpdn_id: cdktf.stringToTerraform(struct!.localFpdnId),
    ping_probe_ip: cdktf.stringToTerraform(struct!.pingProbeIp),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
  }
}


export function serviceZscalerIpsecConfigurationToHclTerraform(struct?: ServiceZscalerIpsecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esp_dh_group_number: {
      value: cdktf.stringToHclTerraform(struct!.espDhGroupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esp_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.espEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esp_integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.espIntegrityAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_probe_url: {
      value: cdktf.stringToHclTerraform(struct!.httpProbeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_dh_group_number: {
      value: cdktf.stringToHclTerraform(struct!.ikeDhGroupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.ikeIntegrityAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_fpdn_id: {
      value: cdktf.stringToHclTerraform(struct!.localFpdnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_probe_ip: {
      value: cdktf.stringToHclTerraform(struct!.pingProbeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceZscalerIpsecConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceZscalerIpsecConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._espDhGroupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.espDhGroupNumber = this._espDhGroupNumber;
    }
    if (this._espEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.espEncryptionAlgorithm = this._espEncryptionAlgorithm;
    }
    if (this._espIntegrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.espIntegrityAlgorithm = this._espIntegrityAlgorithm;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._httpProbeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProbeUrl = this._httpProbeUrl;
    }
    if (this._ikeDhGroupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDhGroupNumber = this._ikeDhGroupNumber;
    }
    if (this._ikeEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryptionAlgorithm = this._ikeEncryptionAlgorithm;
    }
    if (this._ikeIntegrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrityAlgorithm = this._ikeIntegrityAlgorithm;
    }
    if (this._localFpdnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localFpdnId = this._localFpdnId;
    }
    if (this._pingProbeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingProbeIp = this._pingProbeIp;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceZscalerIpsecConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._espDhGroupNumber = undefined;
      this._espEncryptionAlgorithm = undefined;
      this._espIntegrityAlgorithm = undefined;
      this._healthCheckType = undefined;
      this._httpProbeUrl = undefined;
      this._ikeDhGroupNumber = undefined;
      this._ikeEncryptionAlgorithm = undefined;
      this._ikeIntegrityAlgorithm = undefined;
      this._localFpdnId = undefined;
      this._pingProbeIp = undefined;
      this._preSharedKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._espDhGroupNumber = value.espDhGroupNumber;
      this._espEncryptionAlgorithm = value.espEncryptionAlgorithm;
      this._espIntegrityAlgorithm = value.espIntegrityAlgorithm;
      this._healthCheckType = value.healthCheckType;
      this._httpProbeUrl = value.httpProbeUrl;
      this._ikeDhGroupNumber = value.ikeDhGroupNumber;
      this._ikeEncryptionAlgorithm = value.ikeEncryptionAlgorithm;
      this._ikeIntegrityAlgorithm = value.ikeIntegrityAlgorithm;
      this._localFpdnId = value.localFpdnId;
      this._pingProbeIp = value.pingProbeIp;
      this._preSharedKey = value.preSharedKey;
    }
  }

  // esp_dh_group_number - computed: false, optional: true, required: false
  private _espDhGroupNumber?: string; 
  public get espDhGroupNumber() {
    return this.getStringAttribute('esp_dh_group_number');
  }
  public set espDhGroupNumber(value: string) {
    this._espDhGroupNumber = value;
  }
  public resetEspDhGroupNumber() {
    this._espDhGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espDhGroupNumberInput() {
    return this._espDhGroupNumber;
  }

  // esp_encryption_algorithm - computed: false, optional: true, required: false
  private _espEncryptionAlgorithm?: string; 
  public get espEncryptionAlgorithm() {
    return this.getStringAttribute('esp_encryption_algorithm');
  }
  public set espEncryptionAlgorithm(value: string) {
    this._espEncryptionAlgorithm = value;
  }
  public resetEspEncryptionAlgorithm() {
    this._espEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espEncryptionAlgorithmInput() {
    return this._espEncryptionAlgorithm;
  }

  // esp_integrity_algorithm - computed: false, optional: true, required: false
  private _espIntegrityAlgorithm?: string; 
  public get espIntegrityAlgorithm() {
    return this.getStringAttribute('esp_integrity_algorithm');
  }
  public set espIntegrityAlgorithm(value: string) {
    this._espIntegrityAlgorithm = value;
  }
  public resetEspIntegrityAlgorithm() {
    this._espIntegrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espIntegrityAlgorithmInput() {
    return this._espIntegrityAlgorithm;
  }

  // health_check_type - computed: false, optional: false, required: true
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // http_probe_url - computed: false, optional: true, required: false
  private _httpProbeUrl?: string; 
  public get httpProbeUrl() {
    return this.getStringAttribute('http_probe_url');
  }
  public set httpProbeUrl(value: string) {
    this._httpProbeUrl = value;
  }
  public resetHttpProbeUrl() {
    this._httpProbeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProbeUrlInput() {
    return this._httpProbeUrl;
  }

  // ike_dh_group_number - computed: false, optional: true, required: false
  private _ikeDhGroupNumber?: string; 
  public get ikeDhGroupNumber() {
    return this.getStringAttribute('ike_dh_group_number');
  }
  public set ikeDhGroupNumber(value: string) {
    this._ikeDhGroupNumber = value;
  }
  public resetIkeDhGroupNumber() {
    this._ikeDhGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupNumberInput() {
    return this._ikeDhGroupNumber;
  }

  // ike_encryption_algorithm - computed: false, optional: true, required: false
  private _ikeEncryptionAlgorithm?: string; 
  public get ikeEncryptionAlgorithm() {
    return this.getStringAttribute('ike_encryption_algorithm');
  }
  public set ikeEncryptionAlgorithm(value: string) {
    this._ikeEncryptionAlgorithm = value;
  }
  public resetIkeEncryptionAlgorithm() {
    this._ikeEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionAlgorithmInput() {
    return this._ikeEncryptionAlgorithm;
  }

  // ike_integrity_algorithm - computed: false, optional: true, required: false
  private _ikeIntegrityAlgorithm?: string; 
  public get ikeIntegrityAlgorithm() {
    return this.getStringAttribute('ike_integrity_algorithm');
  }
  public set ikeIntegrityAlgorithm(value: string) {
    this._ikeIntegrityAlgorithm = value;
  }
  public resetIkeIntegrityAlgorithm() {
    this._ikeIntegrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityAlgorithmInput() {
    return this._ikeIntegrityAlgorithm;
  }

  // local_fpdn_id - computed: false, optional: false, required: true
  private _localFpdnId?: string; 
  public get localFpdnId() {
    return this.getStringAttribute('local_fpdn_id');
  }
  public set localFpdnId(value: string) {
    this._localFpdnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localFpdnIdInput() {
    return this._localFpdnId;
  }

  // ping_probe_ip - computed: false, optional: true, required: false
  private _pingProbeIp?: string; 
  public get pingProbeIp() {
    return this.getStringAttribute('ping_probe_ip');
  }
  public set pingProbeIp(value: string) {
    this._pingProbeIp = value;
  }
  public resetPingProbeIp() {
    this._pingProbeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingProbeIpInput() {
    return this._pingProbeIp;
  }

  // pre_shared_key - computed: false, optional: false, required: true
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }
}

export class ServiceZscalerIpsecConfigurationList extends cdktf.ComplexList {
  public internalValue? : ServiceZscalerIpsecConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ServiceZscalerIpsecConfigurationOutputReference {
    return new ServiceZscalerIpsecConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler alkira_service_zscaler}
*/
export class ServiceZscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_zscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceZscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceZscaler to import
  * @param importFromId The id of the existing ServiceZscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceZscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_zscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_zscaler alkira_service_zscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceZscalerConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceZscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_zscaler',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingTagIds = config.billingTagIds;
    this._connectorInternetExitId = config.connectorInternetExitId;
    this._cxp = config.cxp;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._primaryPublicEdgeIp = config.primaryPublicEdgeIp;
    this._secondaryPublicEdgeIp = config.secondaryPublicEdgeIp;
    this._segmentIds = config.segmentIds;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._ipsecConfiguration.internalValue = config.ipsecConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // connector_internet_exit_id - computed: false, optional: false, required: true
  private _connectorInternetExitId?: string; 
  public get connectorInternetExitId() {
    return this.getStringAttribute('connector_internet_exit_id');
  }
  public set connectorInternetExitId(value: string) {
    this._connectorInternetExitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInternetExitIdInput() {
    return this._connectorInternetExitId;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // primary_public_edge_ip - computed: false, optional: false, required: true
  private _primaryPublicEdgeIp?: string; 
  public get primaryPublicEdgeIp() {
    return this.getStringAttribute('primary_public_edge_ip');
  }
  public set primaryPublicEdgeIp(value: string) {
    this._primaryPublicEdgeIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPublicEdgeIpInput() {
    return this._primaryPublicEdgeIp;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // secondary_public_edge_ip - computed: false, optional: false, required: true
  private _secondaryPublicEdgeIp?: string; 
  public get secondaryPublicEdgeIp() {
    return this.getStringAttribute('secondary_public_edge_ip');
  }
  public set secondaryPublicEdgeIp(value: string) {
    this._secondaryPublicEdgeIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPublicEdgeIpInput() {
    return this._secondaryPublicEdgeIp;
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: string[]; 
  public get segmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_ids'));
  }
  public set segmentIds(value: string[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // ipsec_configuration - computed: false, optional: false, required: true
  private _ipsecConfiguration = new ServiceZscalerIpsecConfigurationList(this, "ipsec_configuration", true);
  public get ipsecConfiguration() {
    return this._ipsecConfiguration;
  }
  public putIpsecConfiguration(value: ServiceZscalerIpsecConfiguration[] | cdktf.IResolvable) {
    this._ipsecConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecConfigurationInput() {
    return this._ipsecConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      connector_internet_exit_id: cdktf.stringToTerraform(this._connectorInternetExitId),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_public_edge_ip: cdktf.stringToTerraform(this._primaryPublicEdgeIp),
      secondary_public_edge_ip: cdktf.stringToTerraform(this._secondaryPublicEdgeIp),
      segment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentIds),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      ipsec_configuration: cdktf.listMapper(serviceZscalerIpsecConfigurationToTerraform, true)(this._ipsecConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      connector_internet_exit_id: {
        value: cdktf.stringToHclTerraform(this._connectorInternetExitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      primary_public_edge_ip: {
        value: cdktf.stringToHclTerraform(this._primaryPublicEdgeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_public_edge_ip: {
        value: cdktf.stringToHclTerraform(this._secondaryPublicEdgeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_configuration: {
        value: cdktf.listMapperHcl(serviceZscalerIpsecConfigurationToHclTerraform, true)(this._ipsecConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceZscalerIpsecConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
