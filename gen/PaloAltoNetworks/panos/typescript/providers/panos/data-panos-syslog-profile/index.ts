// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosSyslogProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#format DataPanosSyslogProfile#format}
  */
  readonly format?: DataPanosSyslogProfileFormat;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#location DataPanosSyslogProfile#location}
  */
  readonly location: DataPanosSyslogProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#name DataPanosSyslogProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#servers DataPanosSyslogProfile#servers}
  */
  readonly servers?: DataPanosSyslogProfileServers[] | cdktf.IResolvable;
}
export interface DataPanosSyslogProfileFormatEscaping {
  /**
  * Escape character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#escape_character DataPanosSyslogProfile#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * List of characters to be escaped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#escaped_characters DataPanosSyslogProfile#escaped_characters}
  */
  readonly escapedCharacters?: string;
}

export function dataPanosSyslogProfileFormatEscapingToTerraform(struct?: DataPanosSyslogProfileFormatEscaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    escaped_characters: cdktf.stringToTerraform(struct!.escapedCharacters),
  }
}


export function dataPanosSyslogProfileFormatEscapingToHclTerraform(struct?: DataPanosSyslogProfileFormatEscaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escape_character: {
      value: cdktf.stringToHclTerraform(struct!.escapeCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escaped_characters: {
      value: cdktf.stringToHclTerraform(struct!.escapedCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileFormatEscapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileFormatEscaping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escapeCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacter = this._escapeCharacter;
    }
    if (this._escapedCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapedCharacters = this._escapedCharacters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileFormatEscaping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escapeCharacter = undefined;
      this._escapedCharacters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escapeCharacter = value.escapeCharacter;
      this._escapedCharacters = value.escapedCharacters;
    }
  }

  // escape_character - computed: true, optional: true, required: false
  private _escapeCharacter?: string; 
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter;
  }

  // escaped_characters - computed: true, optional: true, required: false
  private _escapedCharacters?: string; 
  public get escapedCharacters() {
    return this.getStringAttribute('escaped_characters');
  }
  public set escapedCharacters(value: string) {
    this._escapedCharacters = value;
  }
  public resetEscapedCharacters() {
    this._escapedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapedCharactersInput() {
    return this._escapedCharacters;
  }
}
export interface DataPanosSyslogProfileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#auth DataPanosSyslogProfile#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#config DataPanosSyslogProfile#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#correlation DataPanosSyslogProfile#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#data DataPanosSyslogProfile#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#decryption DataPanosSyslogProfile#decryption}
  */
  readonly decryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#escaping DataPanosSyslogProfile#escaping}
  */
  readonly escaping?: DataPanosSyslogProfileFormatEscaping;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#globalprotect DataPanosSyslogProfile#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#gtp DataPanosSyslogProfile#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#hip_match DataPanosSyslogProfile#hip_match}
  */
  readonly hipMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#iptag DataPanosSyslogProfile#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#sctp DataPanosSyslogProfile#sctp}
  */
  readonly sctp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#system DataPanosSyslogProfile#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#threat DataPanosSyslogProfile#threat}
  */
  readonly threat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#traffic DataPanosSyslogProfile#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#tunnel DataPanosSyslogProfile#tunnel}
  */
  readonly tunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#url DataPanosSyslogProfile#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#userid DataPanosSyslogProfile#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#wildfire DataPanosSyslogProfile#wildfire}
  */
  readonly wildfire?: string;
}

export function dataPanosSyslogProfileFormatToTerraform(struct?: DataPanosSyslogProfileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    config: cdktf.stringToTerraform(struct!.config),
    correlation: cdktf.stringToTerraform(struct!.correlation),
    data: cdktf.stringToTerraform(struct!.data),
    decryption: cdktf.stringToTerraform(struct!.decryption),
    escaping: dataPanosSyslogProfileFormatEscapingToTerraform(struct!.escaping),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    gtp: cdktf.stringToTerraform(struct!.gtp),
    hip_match: cdktf.stringToTerraform(struct!.hipMatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    sctp: cdktf.stringToTerraform(struct!.sctp),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    threat: cdktf.stringToTerraform(struct!.threat),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
    url: cdktf.stringToTerraform(struct!.url),
    userid: cdktf.stringToTerraform(struct!.userid),
    wildfire: cdktf.stringToTerraform(struct!.wildfire),
  }
}


export function dataPanosSyslogProfileFormatToHclTerraform(struct?: DataPanosSyslogProfileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption: {
      value: cdktf.stringToHclTerraform(struct!.decryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escaping: {
      value: dataPanosSyslogProfileFormatEscapingToHclTerraform(struct!.escaping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileFormatEscaping",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp: {
      value: cdktf.stringToHclTerraform(struct!.gtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hip_match: {
      value: cdktf.stringToHclTerraform(struct!.hipMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp: {
      value: cdktf.stringToHclTerraform(struct!.sctp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat: {
      value: cdktf.stringToHclTerraform(struct!.threat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire: {
      value: cdktf.stringToHclTerraform(struct!.wildfire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._decryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption;
    }
    if (this._escaping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escaping = this._escaping?.internalValue;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._gtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtp = this._gtp;
    }
    if (this._hipMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipMatch = this._hipMatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._sctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctp = this._sctp;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._threat !== undefined) {
      hasAnyValues = true;
      internalValueResult.threat = this._threat;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._wildfire !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._config = undefined;
      this._correlation = undefined;
      this._data = undefined;
      this._decryption = undefined;
      this._escaping.internalValue = undefined;
      this._globalprotect = undefined;
      this._gtp = undefined;
      this._hipMatch = undefined;
      this._iptag = undefined;
      this._sctp = undefined;
      this._system = undefined;
      this._threat = undefined;
      this._traffic = undefined;
      this._tunnel = undefined;
      this._url = undefined;
      this._userid = undefined;
      this._wildfire = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._config = value.config;
      this._correlation = value.correlation;
      this._data = value.data;
      this._decryption = value.decryption;
      this._escaping.internalValue = value.escaping;
      this._globalprotect = value.globalprotect;
      this._gtp = value.gtp;
      this._hipMatch = value.hipMatch;
      this._iptag = value.iptag;
      this._sctp = value.sctp;
      this._system = value.systemAttribute;
      this._threat = value.threat;
      this._traffic = value.traffic;
      this._tunnel = value.tunnel;
      this._url = value.url;
      this._userid = value.userid;
      this._wildfire = value.wildfire;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // correlation - computed: true, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // decryption - computed: true, optional: true, required: false
  private _decryption?: string; 
  public get decryption() {
    return this.getStringAttribute('decryption');
  }
  public set decryption(value: string) {
    this._decryption = value;
  }
  public resetDecryption() {
    this._decryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption;
  }

  // escaping - computed: true, optional: true, required: false
  private _escaping = new DataPanosSyslogProfileFormatEscapingOutputReference(this, "escaping");
  public get escaping() {
    return this._escaping;
  }
  public putEscaping(value: DataPanosSyslogProfileFormatEscaping) {
    this._escaping.internalValue = value;
  }
  public resetEscaping() {
    this._escaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapingInput() {
    return this._escaping.internalValue;
  }

  // globalprotect - computed: true, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // gtp - computed: true, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // hip_match - computed: true, optional: true, required: false
  private _hipMatch?: string; 
  public get hipMatch() {
    return this.getStringAttribute('hip_match');
  }
  public set hipMatch(value: string) {
    this._hipMatch = value;
  }
  public resetHipMatch() {
    this._hipMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipMatchInput() {
    return this._hipMatch;
  }

  // iptag - computed: true, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // sctp - computed: true, optional: true, required: false
  private _sctp?: string; 
  public get sctp() {
    return this.getStringAttribute('sctp');
  }
  public set sctp(value: string) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // threat - computed: true, optional: true, required: false
  private _threat?: string; 
  public get threat() {
    return this.getStringAttribute('threat');
  }
  public set threat(value: string) {
    this._threat = value;
  }
  public resetThreat() {
    this._threat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatInput() {
    return this._threat;
  }

  // traffic - computed: true, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // tunnel - computed: true, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // userid - computed: true, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // wildfire - computed: true, optional: true, required: false
  private _wildfire?: string; 
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
  public set wildfire(value: string) {
    this._wildfire = value;
  }
  public resetWildfire() {
    this._wildfire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire;
  }
}
export interface DataPanosSyslogProfileLocationPanorama {
}

export function dataPanosSyslogProfileLocationPanoramaToTerraform(struct?: DataPanosSyslogProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosSyslogProfileLocationPanoramaToHclTerraform(struct?: DataPanosSyslogProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosSyslogProfileLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationPanorama | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosSyslogProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#name DataPanosSyslogProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#panorama_device DataPanosSyslogProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosSyslogProfileLocationTemplateToTerraform(struct?: DataPanosSyslogProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosSyslogProfileLocationTemplateToHclTerraform(struct?: DataPanosSyslogProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosSyslogProfileLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#name DataPanosSyslogProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#panorama_device DataPanosSyslogProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosSyslogProfileLocationTemplateStackToTerraform(struct?: DataPanosSyslogProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosSyslogProfileLocationTemplateStackToHclTerraform(struct?: DataPanosSyslogProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosSyslogProfileLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#ngfw_device DataPanosSyslogProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#panorama_device DataPanosSyslogProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template_stack DataPanosSyslogProfile#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#vsys DataPanosSyslogProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosSyslogProfileLocationTemplateStackVsysToTerraform(struct?: DataPanosSyslogProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosSyslogProfileLocationTemplateStackVsysToHclTerraform(struct?: DataPanosSyslogProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosSyslogProfileLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#ngfw_device DataPanosSyslogProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#panorama_device DataPanosSyslogProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template DataPanosSyslogProfile#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#vsys DataPanosSyslogProfile#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosSyslogProfileLocationTemplateVsysToTerraform(struct?: DataPanosSyslogProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosSyslogProfileLocationTemplateVsysToHclTerraform(struct?: DataPanosSyslogProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosSyslogProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#name DataPanosSyslogProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#ngfw_device DataPanosSyslogProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosSyslogProfileLocationVsysToTerraform(struct?: DataPanosSyslogProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosSyslogProfileLocationVsysToHclTerraform(struct?: DataPanosSyslogProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosSyslogProfileLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#panorama DataPanosSyslogProfile#panorama}
  */
  readonly panorama?: DataPanosSyslogProfileLocationPanorama;
  /**
  * A shared resource located within a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template DataPanosSyslogProfile#template}
  */
  readonly template?: DataPanosSyslogProfileLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template_stack DataPanosSyslogProfile#template_stack}
  */
  readonly templateStack?: DataPanosSyslogProfileLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template_stack_vsys DataPanosSyslogProfile#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosSyslogProfileLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#template_vsys DataPanosSyslogProfile#template_vsys}
  */
  readonly templateVsys?: DataPanosSyslogProfileLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#vsys DataPanosSyslogProfile#vsys}
  */
  readonly vsys?: DataPanosSyslogProfileLocationVsys;
}

export function dataPanosSyslogProfileLocationToTerraform(struct?: DataPanosSyslogProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: dataPanosSyslogProfileLocationPanoramaToTerraform(struct!.panorama),
    template: dataPanosSyslogProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosSyslogProfileLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosSyslogProfileLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosSyslogProfileLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: dataPanosSyslogProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosSyslogProfileLocationToHclTerraform(struct?: DataPanosSyslogProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: dataPanosSyslogProfileLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationPanorama",
    },
    template: {
      value: dataPanosSyslogProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosSyslogProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosSyslogProfileLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosSyslogProfileLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationTemplateVsys",
    },
    vsys: {
      value: dataPanosSyslogProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSyslogProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSyslogProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
      this._vsys.internalValue = value.vsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new DataPanosSyslogProfileLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: DataPanosSyslogProfileLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosSyslogProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosSyslogProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosSyslogProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosSyslogProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new DataPanosSyslogProfileLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosSyslogProfileLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new DataPanosSyslogProfileLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosSyslogProfileLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DataPanosSyslogProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosSyslogProfileLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface DataPanosSyslogProfileServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#facility DataPanosSyslogProfile#facility}
  */
  readonly facility?: string;
  /**
  * Format of the Syslog message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#format DataPanosSyslogProfile#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#name DataPanosSyslogProfile#name}
  */
  readonly name: string;
  /**
  * Port number (Standard Syslog ports UDP:514, SSL:6514)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#port DataPanosSyslogProfile#port}
  */
  readonly port?: number;
  /**
  * IP address or FQDN of SYSLOG server to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#server DataPanosSyslogProfile#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#transport DataPanosSyslogProfile#transport}
  */
  readonly transport?: string;
}

export function dataPanosSyslogProfileServersToTerraform(struct?: DataPanosSyslogProfileServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    transport: cdktf.stringToTerraform(struct!.transport),
  }
}


export function dataPanosSyslogProfileServersToHclTerraform(struct?: DataPanosSyslogProfileServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSyslogProfileServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosSyslogProfileServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSyslogProfileServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._format = undefined;
      this._name = undefined;
      this._port = undefined;
      this._server = undefined;
      this._transport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._format = value.format;
      this._name = value.name;
      this._port = value.port;
      this._server = value.server;
      this._transport = value.transport;
    }
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: true, optional: false, required: true
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

  // port - computed: true, optional: true, required: false
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

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }
}

export class DataPanosSyslogProfileServersList extends cdktf.ComplexList {
  public internalValue? : DataPanosSyslogProfileServers[] | cdktf.IResolvable

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
  public get(index: number): DataPanosSyslogProfileServersOutputReference {
    return new DataPanosSyslogProfileServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile panos_syslog_profile}
*/
export class DataPanosSyslogProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_syslog_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosSyslogProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosSyslogProfile to import
  * @param importFromId The id of the existing DataPanosSyslogProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosSyslogProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_syslog_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/syslog_profile panos_syslog_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosSyslogProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosSyslogProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_syslog_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._format.internalValue = config.format;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._servers.internalValue = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: true, optional: true, required: false
  private _format = new DataPanosSyslogProfileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataPanosSyslogProfileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosSyslogProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosSyslogProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // servers - computed: true, optional: true, required: false
  private _servers = new DataPanosSyslogProfileServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataPanosSyslogProfileServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: dataPanosSyslogProfileFormatToTerraform(this._format.internalValue),
      location: dataPanosSyslogProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(dataPanosSyslogProfileServersToTerraform, false)(this._servers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: dataPanosSyslogProfileFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosSyslogProfileFormat",
      },
      location: {
        value: dataPanosSyslogProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosSyslogProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(dataPanosSyslogProfileServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosSyslogProfileServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
