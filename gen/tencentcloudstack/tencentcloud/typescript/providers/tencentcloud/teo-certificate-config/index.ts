// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoCertificateConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Acceleration domain name that needs to modify the certificate configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#host TeoCertificateConfig#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#id TeoCertificateConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mode of configuring the certificate, the values are: `disable`: Do not configure the certificate; `eofreecert`: Configure EdgeOne free certificate; `sslcert`: Configure SSL certificate. If not filled in, the default value is `disable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#mode TeoCertificateConfig#mode}
  */
  readonly mode?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#zone_id TeoCertificateConfig#zone_id}
  */
  readonly zoneId: string;
  /**
  * server_cert_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#server_cert_info TeoCertificateConfig#server_cert_info}
  */
  readonly serverCertInfo?: TeoCertificateConfigServerCertInfo[] | cdktf.IResolvable;
  /**
  * upstream_cert_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#upstream_cert_info TeoCertificateConfig#upstream_cert_info}
  */
  readonly upstreamCertInfo?: TeoCertificateConfigUpstreamCertInfo;
}
export interface TeoCertificateConfigServerCertInfo {
  /**
  * Alias of the certificate.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#alias TeoCertificateConfig#alias}
  */
  readonly alias?: string;
  /**
  * ID of the server certificate.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#cert_id TeoCertificateConfig#cert_id}
  */
  readonly certId: string;
  /**
  * Domain name of the certificate. Note: This field may return `null`, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#common_name TeoCertificateConfig#common_name}
  */
  readonly commonName?: string;
  /**
  * Time when the certificate is deployed. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#deploy_time TeoCertificateConfig#deploy_time}
  */
  readonly deployTime?: string;
  /**
  * Time when the certificate expires. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#expire_time TeoCertificateConfig#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Signature algorithm. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#sign_algo TeoCertificateConfig#sign_algo}
  */
  readonly signAlgo?: string;
  /**
  * Type of the certificate. Values: `default`: Default certificate; `upload`: Specified certificate; `managed`: Tencent Cloud-managed certificate. Note: This field may return `null`, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#type TeoCertificateConfig#type}
  */
  readonly type?: string;
}

export function teoCertificateConfigServerCertInfoToTerraform(struct?: TeoCertificateConfigServerCertInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cert_id: cdktf.stringToTerraform(struct!.certId),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    deploy_time: cdktf.stringToTerraform(struct!.deployTime),
    expire_time: cdktf.stringToTerraform(struct!.expireTime),
    sign_algo: cdktf.stringToTerraform(struct!.signAlgo),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function teoCertificateConfigServerCertInfoToHclTerraform(struct?: TeoCertificateConfigServerCertInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_id: {
      value: cdktf.stringToHclTerraform(struct!.certId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_time: {
      value: cdktf.stringToHclTerraform(struct!.deployTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.stringToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_algo: {
      value: cdktf.stringToHclTerraform(struct!.signAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoCertificateConfigServerCertInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoCertificateConfigServerCertInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._deployTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployTime = this._deployTime;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._signAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAlgo = this._signAlgo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoCertificateConfigServerCertInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certId = undefined;
      this._commonName = undefined;
      this._deployTime = undefined;
      this._expireTime = undefined;
      this._signAlgo = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certId = value.certId;
      this._commonName = value.commonName;
      this._deployTime = value.deployTime;
      this._expireTime = value.expireTime;
      this._signAlgo = value.signAlgo;
      this._type = value.type;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cert_id - computed: false, optional: false, required: true
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // deploy_time - computed: true, optional: true, required: false
  private _deployTime?: string; 
  public get deployTime() {
    return this.getStringAttribute('deploy_time');
  }
  public set deployTime(value: string) {
    this._deployTime = value;
  }
  public resetDeployTime() {
    this._deployTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTimeInput() {
    return this._deployTime;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // sign_algo - computed: true, optional: true, required: false
  private _signAlgo?: string; 
  public get signAlgo() {
    return this.getStringAttribute('sign_algo');
  }
  public set signAlgo(value: string) {
    this._signAlgo = value;
  }
  public resetSignAlgo() {
    this._signAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAlgoInput() {
    return this._signAlgo;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TeoCertificateConfigServerCertInfoList extends cdktf.ComplexList {
  public internalValue? : TeoCertificateConfigServerCertInfo[] | cdktf.IResolvable

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
  public get(index: number): TeoCertificateConfigServerCertInfoOutputReference {
    return new TeoCertificateConfigServerCertInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos {
  /**
  * Certificate ID, which originates from the SSL side. You can check the CertId from the [SSL Certificate List](https://console.cloud.tencent.com/ssl).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#cert_id TeoCertificateConfig#cert_id}
  */
  readonly certId: string;
}

export function teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosToTerraform(struct?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_id: cdktf.stringToTerraform(struct!.certId),
  }
}


export function teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosToHclTerraform(struct?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_id: {
      value: cdktf.stringToHclTerraform(struct!.certId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certId = value.certId;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // cert_id - computed: false, optional: false, required: true
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // deploy_time - computed: true, optional: false, required: false
  public get deployTime() {
    return this.getStringAttribute('deploy_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // sign_algo - computed: true, optional: false, required: false
  public get signAlgo() {
    return this.getStringAttribute('sign_algo');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosList extends cdktf.ComplexList {
  public internalValue? : TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos[] | cdktf.IResolvable

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
  public get(index: number): TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosOutputReference {
    return new TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls {
  /**
  * Mutual authentication configuration switch, the values are: `on`: enable; `off`: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#switch TeoCertificateConfig#switch}
  */
  readonly switch: string;
  /**
  * cert_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#cert_infos TeoCertificateConfig#cert_infos}
  */
  readonly certInfos?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos[] | cdktf.IResolvable;
}

export function teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsToTerraform(struct?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsOutputReference | TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    cert_infos: cdktf.listMapper(teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosToTerraform, true)(struct!.certInfos),
  }
}


export function teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsToHclTerraform(struct?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsOutputReference | TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_infos: {
      value: cdktf.listMapperHcl(teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosToHclTerraform, true)(struct!.certInfos),
      isBlock: true,
      type: "list",
      storageClassType: "TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._certInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certInfos = this._certInfos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._certInfos.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._certInfos.internalValue = value.certInfos;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // cert_infos - computed: false, optional: true, required: false
  private _certInfos = new TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfosList(this, "cert_infos", false);
  public get certInfos() {
    return this._certInfos;
  }
  public putCertInfos(value: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsCertInfos[] | cdktf.IResolvable) {
    this._certInfos.internalValue = value;
  }
  public resetCertInfos() {
    this._certInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInfosInput() {
    return this._certInfos.internalValue;
  }
}
export interface TeoCertificateConfigUpstreamCertInfo {
  /**
  * upstream_mutual_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#upstream_mutual_tls TeoCertificateConfig#upstream_mutual_tls}
  */
  readonly upstreamMutualTls?: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls;
}

export function teoCertificateConfigUpstreamCertInfoToTerraform(struct?: TeoCertificateConfigUpstreamCertInfoOutputReference | TeoCertificateConfigUpstreamCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upstream_mutual_tls: teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsToTerraform(struct!.upstreamMutualTls),
  }
}


export function teoCertificateConfigUpstreamCertInfoToHclTerraform(struct?: TeoCertificateConfigUpstreamCertInfoOutputReference | TeoCertificateConfigUpstreamCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upstream_mutual_tls: {
      value: teoCertificateConfigUpstreamCertInfoUpstreamMutualTlsToHclTerraform(struct!.upstreamMutualTls),
      isBlock: true,
      type: "list",
      storageClassType: "TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoCertificateConfigUpstreamCertInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoCertificateConfigUpstreamCertInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upstreamMutualTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamMutualTls = this._upstreamMutualTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoCertificateConfigUpstreamCertInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upstreamMutualTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upstreamMutualTls.internalValue = value.upstreamMutualTls;
    }
  }

  // upstream_mutual_tls - computed: false, optional: true, required: false
  private _upstreamMutualTls = new TeoCertificateConfigUpstreamCertInfoUpstreamMutualTlsOutputReference(this, "upstream_mutual_tls");
  public get upstreamMutualTls() {
    return this._upstreamMutualTls;
  }
  public putUpstreamMutualTls(value: TeoCertificateConfigUpstreamCertInfoUpstreamMutualTls) {
    this._upstreamMutualTls.internalValue = value;
  }
  public resetUpstreamMutualTls() {
    this._upstreamMutualTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamMutualTlsInput() {
    return this._upstreamMutualTls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config tencentcloud_teo_certificate_config}
*/
export class TeoCertificateConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_certificate_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoCertificateConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoCertificateConfig to import
  * @param importFromId The id of the existing TeoCertificateConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoCertificateConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_certificate_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/teo_certificate_config tencentcloud_teo_certificate_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoCertificateConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TeoCertificateConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_certificate_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._id = config.id;
    this._mode = config.mode;
    this._zoneId = config.zoneId;
    this._serverCertInfo.internalValue = config.serverCertInfo;
    this._upstreamCertInfo.internalValue = config.upstreamCertInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // server_cert_info - computed: false, optional: true, required: false
  private _serverCertInfo = new TeoCertificateConfigServerCertInfoList(this, "server_cert_info", false);
  public get serverCertInfo() {
    return this._serverCertInfo;
  }
  public putServerCertInfo(value: TeoCertificateConfigServerCertInfo[] | cdktf.IResolvable) {
    this._serverCertInfo.internalValue = value;
  }
  public resetServerCertInfo() {
    this._serverCertInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInfoInput() {
    return this._serverCertInfo.internalValue;
  }

  // upstream_cert_info - computed: false, optional: true, required: false
  private _upstreamCertInfo = new TeoCertificateConfigUpstreamCertInfoOutputReference(this, "upstream_cert_info");
  public get upstreamCertInfo() {
    return this._upstreamCertInfo;
  }
  public putUpstreamCertInfo(value: TeoCertificateConfigUpstreamCertInfo) {
    this._upstreamCertInfo.internalValue = value;
  }
  public resetUpstreamCertInfo() {
    this._upstreamCertInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamCertInfoInput() {
    return this._upstreamCertInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      server_cert_info: cdktf.listMapper(teoCertificateConfigServerCertInfoToTerraform, true)(this._serverCertInfo.internalValue),
      upstream_cert_info: teoCertificateConfigUpstreamCertInfoToTerraform(this._upstreamCertInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert_info: {
        value: cdktf.listMapperHcl(teoCertificateConfigServerCertInfoToHclTerraform, true)(this._serverCertInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoCertificateConfigServerCertInfoList",
      },
      upstream_cert_info: {
        value: teoCertificateConfigUpstreamCertInfoToHclTerraform(this._upstreamCertInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoCertificateConfigUpstreamCertInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
