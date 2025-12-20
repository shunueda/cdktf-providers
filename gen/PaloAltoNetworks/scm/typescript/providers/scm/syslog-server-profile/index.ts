// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyslogServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#device SyslogServerProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#folder SyslogServerProfile#folder}
  */
  readonly folder?: string;
  /**
  * Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#format SyslogServerProfile#format}
  */
  readonly format?: SyslogServerProfileFormat;
  /**
  * The name of the syslog server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#name SyslogServerProfile#name}
  */
  readonly name: string;
  /**
  * A list of syslog server configurations. At least one server is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#server SyslogServerProfile#server}
  */
  readonly server: SyslogServerProfileServer[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#snippet SyslogServerProfile#snippet}
  */
  readonly snippet?: string;
}
export interface SyslogServerProfileFormatEscaping {
  /**
  * Escape sequence delimiter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#escape_character SyslogServerProfile#escape_character}
  */
  readonly escapeCharacter?: string;
  /**
  * A list of all the characters to be escaped (without spaces).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#escaped_characters SyslogServerProfile#escaped_characters}
  */
  readonly escapedCharacters?: string;
}

export function syslogServerProfileFormatEscapingToTerraform(struct?: SyslogServerProfileFormatEscaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escape_character: cdktf.stringToTerraform(struct!.escapeCharacter),
    escaped_characters: cdktf.stringToTerraform(struct!.escapedCharacters),
  }
}


export function syslogServerProfileFormatEscapingToHclTerraform(struct?: SyslogServerProfileFormatEscaping | cdktf.IResolvable): any {
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

export class SyslogServerProfileFormatEscapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyslogServerProfileFormatEscaping | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SyslogServerProfileFormatEscaping | cdktf.IResolvable | undefined) {
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

  // escape_character - computed: false, optional: true, required: false
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

  // escaped_characters - computed: false, optional: true, required: false
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
export interface SyslogServerProfileFormat {
  /**
  * Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#auth SyslogServerProfile#auth}
  */
  readonly auth?: string;
  /**
  * Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#config SyslogServerProfile#config}
  */
  readonly config?: string;
  /**
  * Correlation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#correlation SyslogServerProfile#correlation}
  */
  readonly correlation?: string;
  /**
  * Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#data SyslogServerProfile#data}
  */
  readonly data?: string;
  /**
  * Decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#decryption SyslogServerProfile#decryption}
  */
  readonly decryption?: string;
  /**
  * Escaping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#escaping SyslogServerProfile#escaping}
  */
  readonly escaping?: SyslogServerProfileFormatEscaping;
  /**
  * Globalprotect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#globalprotect SyslogServerProfile#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Gtp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#gtp SyslogServerProfile#gtp}
  */
  readonly gtp?: string;
  /**
  * Hip match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#hip_match SyslogServerProfile#hip_match}
  */
  readonly hipMatch?: string;
  /**
  * Iptag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#iptag SyslogServerProfile#iptag}
  */
  readonly iptag?: string;
  /**
  * Sctp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#sctp SyslogServerProfile#sctp}
  */
  readonly sctp?: string;
  /**
  * System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#system SyslogServerProfile#system}
  */
  readonly systemAttribute?: string;
  /**
  * Threat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#threat SyslogServerProfile#threat}
  */
  readonly threat?: string;
  /**
  * Traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#traffic SyslogServerProfile#traffic}
  */
  readonly traffic?: string;
  /**
  * Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#tunnel SyslogServerProfile#tunnel}
  */
  readonly tunnel?: string;
  /**
  * Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#url SyslogServerProfile#url}
  */
  readonly url?: string;
  /**
  * Userid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#userid SyslogServerProfile#userid}
  */
  readonly userid?: string;
  /**
  * Wildfire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#wildfire SyslogServerProfile#wildfire}
  */
  readonly wildfire?: string;
}

export function syslogServerProfileFormatToTerraform(struct?: SyslogServerProfileFormat | cdktf.IResolvable): any {
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
    escaping: syslogServerProfileFormatEscapingToTerraform(struct!.escaping),
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


export function syslogServerProfileFormatToHclTerraform(struct?: SyslogServerProfileFormat | cdktf.IResolvable): any {
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
      value: syslogServerProfileFormatEscapingToHclTerraform(struct!.escaping),
      isBlock: true,
      type: "struct",
      storageClassType: "SyslogServerProfileFormatEscaping",
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

export class SyslogServerProfileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyslogServerProfileFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SyslogServerProfileFormat | cdktf.IResolvable | undefined) {
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

  // auth - computed: false, optional: true, required: false
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

  // config - computed: false, optional: true, required: false
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

  // correlation - computed: false, optional: true, required: false
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

  // data - computed: false, optional: true, required: false
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

  // decryption - computed: false, optional: true, required: false
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

  // escaping - computed: false, optional: true, required: false
  private _escaping = new SyslogServerProfileFormatEscapingOutputReference(this, "escaping");
  public get escaping() {
    return this._escaping;
  }
  public putEscaping(value: SyslogServerProfileFormatEscaping) {
    this._escaping.internalValue = value;
  }
  public resetEscaping() {
    this._escaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapingInput() {
    return this._escaping.internalValue;
  }

  // globalprotect - computed: false, optional: true, required: false
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

  // gtp - computed: false, optional: true, required: false
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

  // hip_match - computed: false, optional: true, required: false
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

  // iptag - computed: false, optional: true, required: false
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

  // sctp - computed: false, optional: true, required: false
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

  // system - computed: false, optional: true, required: false
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

  // threat - computed: false, optional: true, required: false
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

  // traffic - computed: false, optional: true, required: false
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

  // tunnel - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
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

  // userid - computed: false, optional: true, required: false
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

  // wildfire - computed: false, optional: true, required: false
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
export interface SyslogServerProfileServer {
  /**
  * Syslog facility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#facility SyslogServerProfile#facility}
  */
  readonly facility?: string;
  /**
  * Syslog format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#format SyslogServerProfile#format}
  */
  readonly format?: string;
  /**
  * Syslog server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#name SyslogServerProfile#name}
  */
  readonly name?: string;
  /**
  * Syslog server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#port SyslogServerProfile#port}
  */
  readonly port?: number;
  /**
  * Syslog server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#server SyslogServerProfile#server}
  */
  readonly server?: string;
  /**
  * Transport protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#transport SyslogServerProfile#transport}
  */
  readonly transport?: string;
}

export function syslogServerProfileServerToTerraform(struct?: SyslogServerProfileServer | cdktf.IResolvable): any {
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


export function syslogServerProfileServerToHclTerraform(struct?: SyslogServerProfileServer | cdktf.IResolvable): any {
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

export class SyslogServerProfileServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyslogServerProfileServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SyslogServerProfileServer | cdktf.IResolvable | undefined) {
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

  // facility - computed: false, optional: true, required: false
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

  // format - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
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

  // transport - computed: false, optional: true, required: false
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

export class SyslogServerProfileServerList extends cdktf.ComplexList {
  public internalValue? : SyslogServerProfileServer[] | cdktf.IResolvable

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
  public get(index: number): SyslogServerProfileServerOutputReference {
    return new SyslogServerProfileServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile scm_syslog_server_profile}
*/
export class SyslogServerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_syslog_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyslogServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyslogServerProfile to import
  * @param importFromId The id of the existing SyslogServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyslogServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_syslog_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/syslog_server_profile scm_syslog_server_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyslogServerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SyslogServerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_syslog_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._format.internalValue = config.format;
    this._name = config.name;
    this._server.internalValue = config.server;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // format - computed: false, optional: true, required: false
  private _format = new SyslogServerProfileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SyslogServerProfileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // server - computed: false, optional: false, required: true
  private _server = new SyslogServerProfileServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: SyslogServerProfileServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      format: syslogServerProfileFormatToTerraform(this._format.internalValue),
      name: cdktf.stringToTerraform(this._name),
      server: cdktf.listMapper(syslogServerProfileServerToTerraform, false)(this._server.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: syslogServerProfileFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyslogServerProfileFormat",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(syslogServerProfileServerToHclTerraform, false)(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyslogServerProfileServerList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
